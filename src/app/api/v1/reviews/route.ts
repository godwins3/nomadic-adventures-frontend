import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Review from '@/models/Review';

export async function POST(req: Request) {
  await dbConnect();
  
  try {
    const { tourId, rating, comment } = await req.json();

    if (!tourId || !rating || !comment) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const review = new Review({
      tourId,
      rating,
      comment,
    });

    await review.save();

    return NextResponse.json({ message: 'Review added successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error adding review:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: Request) {
    await dbConnect();

  try {
    const url = new URL(req.url);
    const tourId = url.searchParams.get('tourId');

    if (!tourId) {
      return NextResponse.json({ error: 'Missing tourId parameter' }, { status: 400 });
    }

    const reviews = await Review.find({ tourId });

    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
