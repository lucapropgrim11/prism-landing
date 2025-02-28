import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase';

interface PreRegisterData {
  name: string;
  email: string;
  company?: string;
  role?: string;
}

export async function POST(request: Request) {
  try {
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
          // Let the database handle the timestamp
          registered_at: null
        },
      ]);

    if (insertError) {
      console.error('Supabase insert error:', insertError);
      throw new Error('Failed to store registration');
    }

    // Send a success response
    return NextResponse.json(
      { message: 'Pre-registration successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Pre-registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 