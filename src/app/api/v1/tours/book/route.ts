// src/app/api/v1/tours/book/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Booking, { IBooking } from '@/models/Booking';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const bookingData: IBooking = await req.json();
    const newBooking = new Booking(bookingData);
    await newBooking.save();
    return NextResponse.json({ message: 'Booking successful' }, { status: 200 });
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
