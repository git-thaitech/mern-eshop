import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        },
        console.log(`Connected to Mongo database`));
    } catch (e) {
        console.log(`Error: ${e.message}`);
        process.exit(1);
    }
}

export default connectDatabase;