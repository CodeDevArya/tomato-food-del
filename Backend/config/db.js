import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {

    if (isConnected) {
        console.log('Database already connected.');
        return isConnected;
    }

    try {
        const res = await mongoose.connect('mongodb+srv://Himanshu:himarya990@cluster0.nzmqqyo.mongodb.net/zomato-clone')
        console.log("Database connected successfully")
        isConnected = res.connection
        return isConnected;
        
    } catch (error) {

        console.log("Error connecting database", error)
        throw error;

    }

}

export default connectDB;

