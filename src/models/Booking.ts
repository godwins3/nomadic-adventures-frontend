// models/Booking.ts
import mongoose, { Document, Model } from 'mongoose';
import { string } from 'three/webgpu';

export interface IBooking extends Document {
//   tourId: mongoose.Types.ObjectId;
  tourId: string;
  destination: string;
  date: Date;
  name: string;
  email: string;
  phone: string;
  travelers: number;
  additionalOptions: string[];
}

const BookingSchema = new mongoose.Schema<IBooking>({
  tourId: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  travelers: {
    type: Number,
    required: true,
  },
  additionalOptions: {
    type: [String],
    default: [],
  },
});

const Booking: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
