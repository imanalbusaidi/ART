import mongoose from "mongoose";
		const feedbackSchema = mongoose.Schema({
            username: { type: String, required: true },
            email: { type: String, required: true },
            message: { type: String, required: true },
	});
	const feedbackModel = mongoose.model("feedbacks", feedbackSchema);
	export default feedbackModel
