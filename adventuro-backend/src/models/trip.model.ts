import mongoose, { Schema, Document } from "mongoose";

export interface ITrip extends Document {
  user: mongoose.Types.ObjectId;
  source: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  travelType: "SOLO" | "COUPLE" | "FAMILY";
  interests: string[];
  status: "DRAFT" | "GENERATED" | "COMPLETED";
  itinerary?: any;
  createdAt: Date;
  updatedAt: Date;
}

const TripSchema = new Schema<ITrip>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    source: {
      type: String,
      required: true,
      trim: true
    },
    destination: {
      type: String,
      required: true,
      trim: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    budget: {
      type: Number,
      required: true,
      min: 0
    },
    travelType: {
      type: String,
      enum: ["SOLO", "COUPLE", "FAMILY"],
      required: true
    },
    interests: {
      type: [String],
      default: []
    },
    status: {
      type: String,
      enum: ["DRAFT", "GENERATED", "COMPLETED"],
      default: "DRAFT"
    },
    itinerary: {
      type: Schema.Types.Mixed
    }
  },
  {
    timestamps: true
  }
);

export const Trip = mongoose.model<ITrip>("Trip", TripSchema);
