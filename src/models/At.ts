import { model, Schema } from "mongoose";

export const At = model(
  "At",
  new Schema({
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
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    mediaUrls: [
      {
        url: String,
        fileType: String,
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Referência ao modelo de usuário
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
);
