import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase';

// Simple admin check - in production, use proper authentication
const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

export async function GET(request: Request) {
  try {
    // Get the authorization header
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.split(' ')[1];

    // Check if admin token is valid
    if (!ADMIN_TOKEN || token !== ADMIN_TOKEN) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Fetch registrations from Supabase
    const { data: registrations, error } = await supabase
      .from('pre_registrations')
      .select('*')
      .order('registered_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to fetch registrations');
    }

    return NextResponse.json({ registrations });
  } catch (error) {
    console.error('Admin API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 