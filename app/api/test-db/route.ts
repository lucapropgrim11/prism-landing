import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase';

export async function GET() {
  try {
    // Test the connection by attempting to access the pre_registrations table
    const { data, error } = await supabase
      .from('pre_registrations')
      .select('count')
      .limit(1);

    if (error) {
      console.error('Supabase connection error:', error);
      return NextResponse.json(
        { 
          error: 'Database connection failed',
          details: error.message
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Database connection successful',
        data
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Test endpoint error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 