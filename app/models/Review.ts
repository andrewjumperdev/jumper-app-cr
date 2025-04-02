import { Schema, model, models } from "mongoose";

const ReviewSchema = new Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  createdAt: { type: Date, default: Date.now },
});

const Review = models.Review || model("Review", ReviewSchema);
export default Review;
