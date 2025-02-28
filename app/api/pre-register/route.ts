import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { supabase } from '@/utils/supabase';
import { ratelimit } from '@/utils/ratelimit';
import { sendWelcomeEmail, sendAdminNotificationEmail } from '@/utils/email';

interface PreRegisterData {
  name: string;
  email: string;
  company?: string;
  role?: string;
}

export async function POST(request: Request) {
  try {
    // Get IP for rate limiting
    const forwardedFor = headers().get('x-forwarded-for');
    const ip = forwardedFor?.split(',')[0] || 'anonymous';

    // Check rate limit
    const { success, limit, reset, remaining } = await ratelimit.limit(ip);
    
    if (!success) {
      return NextResponse.json(
        { 
          error: 'Too many registration attempts. Please try again later.',
          reset
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString()
          }
        }
      );
    }

    const data: PreRegisterData = await request.json();

    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existingUser } = await supabase
      .from('pre_registrations')
      .select('email')
      .eq('email', data.email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'This email is already registered' },
        { status: 400 }
      );
    }

    // Store the registration in Supabase
    const { error: insertError } = await supabase
      .from('pre_registrations')
      .insert([
        {
          name: data.name,
          email: data.email,
          company: data.company || null,
          role: data.role || null,
          registered_at: null // Let the database handle the timestamp
        },
      ]);

    if (insertError) {
      console.error('Supabase insert error:', insertError);
      throw new Error('Failed to store registration');
    }

    // Send welcome email to user
    await sendWelcomeEmail(data.name, data.email);

    // Send notification to admin
    await sendAdminNotificationEmail(data);

    // Send a success response
    return NextResponse.json(
      { 
        message: 'Pre-registration successful',
        rateLimit: {
          remaining,
          reset
        }
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString()
        }
      }
    );
  } catch (error) {
    console.error('Pre-registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 