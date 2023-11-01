import { model, Schema } from "mongoose";

export const Announcement = model(
  "Announcement",
  new Schema({
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    km: {
      type: String,
      required: false,
    },
    year: {
      type: String,
      required: false,
    },
    brand: {
      type: String,
      required: false,
    },
    mediaUrls: [
      {
        url: String,
        fileType: String,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
);
