import mongoose from "mongoose";

const Schema = mongoose.Schema;

const JobSchema = new Schema({
    company: String,
    title: String,
    Location: String,
    jobDescription: String,
    status: String,
    dateApplied: Date,
});

const JobModel = mongoose.model("Job", JobSchema);

export default JobModel;
