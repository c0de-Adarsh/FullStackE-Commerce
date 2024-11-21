const mongoose = require('mongoose');


const connectDB = async () =>{
    if(!process.env.MONGO_URI){
        console.error('Error: MONGO_URI is defined in .ev');
        process.exit(1)
    }


  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected:${conn.connection.host}`);    
  } catch (error) {
    console.error(`Database Connection:${error.message}`)
  }
}
  module.exports = connectDB;

// const mongoURL = 'mongodb://localhost:27017/mydatabase';

// mongoose.connect(mongoURL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })


// const db = mongoose.connection;