import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Booking, { IBooking } from '@/models/Booking';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const bookingData: IBooking = await req.json();
    const newBooking = new Booking(bookingData);
    await newBooking.save();

    // Send confirmation email
    await sendBookingConfirmationEmail(bookingData.email, bookingData);

    return NextResponse.json({ message: 'Booking successful' }, { status: 200 });
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// Function to send booking confirmation email using MailerSend
async function sendBookingConfirmationEmail(userEmail: string, bookingData: IBooking) {
  const mailerSend = new MailerSend({
    apiKey: String(process.env.MAILERSEND_API_KEY), // Set this in your .env file
  });

  const sentFrom = new Sender(process.env.MAILERSEND_FROM_EMAIL!, "Nomadic Adventures");

  const recipients = [
    new Recipient(userEmail, bookingData.name || "Customer"),
  ];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("Tour Booking Confirmation")
    .setHtml(`
      <h2>Booking Confirmation</h2>
      <p>Dear ${bookingData.name},</p>
      <p>Thank you for booking your tour with us. Here are your details:</p>
      <ul>
        <li><strong>Tour Name:</strong> ${bookingData.destination}</li>
        <li><strong>Date:</strong> ${bookingData.date}</li>
        <li><strong>Number of People:</strong> ${bookingData.travelers}</li>
      </ul>
      <p>We look forward to your tour!</p>
    `)
    .setText(`
      Dear ${bookingData.name},
      
      Thank you for booking your tour with us.
      Tour Name: ${bookingData.destination}
      Date: ${bookingData.date}
      Number of People: ${bookingData.travelers}
      
      We look forward to your tour!
    `);

  await mailerSend.email.send(emailParams);
}
