import mongoose, { Schema } from mongoose;

const subscriptionSchema = new Schema({
    subscriber: { types: Schema.Types.ObjectId, ref: "User" },  // one who is subscribing 
    subscriber: { types: Schema.Types.ObjectId, ref: "User" },  // one to whom 'subscriber' is subscribing 
}, { timestamps: true })

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
