import mongoose from 'mongoose';

const schemeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    when_to_apply: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    criteria: {
        type: String,
        required: true
    },
    benefits: {
        type: String,
        required: true
    },
    income_bracket: {
        type: String,
        required: true
    }
}, {timestamps: true}); // This helps get the date and time for when a scheme is created or updated

const Scheme = mongoose.model("Scheme", schemeSchema);

export default Scheme;
