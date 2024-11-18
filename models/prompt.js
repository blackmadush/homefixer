import mongoose from "mongoose";

const PromptSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
    required: [true, "Description is required."],
  },
  tag: {
    type: String,
    required: [true, "Profession tag is required."],
  },
});

const Prompt = mongoose.models.Prompt || mongoose.model("Prompt", PromptSchema);

export default Prompt;
