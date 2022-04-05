import mongoose from "mongoose";

const connectMongo = async () => {
  const DATABASE_NAME = process.env.DATABASE_NAME || "animals";
  
  try {
    const connection = await mongoose.connect(process.env.DB_URL2, {
      dbName: DATABASE_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ DB connected successfully");
    return connection;
  } catch (e) {
    console.error("❌ Connection to db failed: ", e);
  }
};

export default connectMongo;
