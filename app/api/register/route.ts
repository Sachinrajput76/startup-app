import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, password } = body;

  if (username && password) {
    const response = NextResponse.json({ message: 'Registration successful!' });
    response.cookies.set('sessionToken', 'dummyToken123', { httpOnly: true, path: '/' });
    return response;
  }

  return NextResponse.json({ message: 'Invalid input' }, { status: 400 });
}
