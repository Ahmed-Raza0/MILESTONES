import { NextResponse } from 'next/server';
import supabase from '@/utils/supabase/supabase';

export async function POST(request: Request) {
  const { title, content } = await request.json();
  const { data, error } = await supabase.from('posts').insert([{ title, content }]);
  if (error) return NextResponse.json({ error }, { status: 400 });
  return NextResponse.json({ data });
}

export async function PUT(request: Request) {
  const { id, title, content } = await request.json();
  const { data, error } = await supabase.from('posts').update({ title, content }).eq('id', id);
  if (error) return NextResponse.json({ error }, { status: 400 });
  return NextResponse.json({ data });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const { data, error } = await supabase.from('posts').delete().eq('id', id);
  if (error) return NextResponse.json({ error }, { status: 400 });
  return NextResponse.json({ data });
}
