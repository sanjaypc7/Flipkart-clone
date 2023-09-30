import mongoose from "mongoose";

export const Connection= async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@ecommerce-web.t0w2j2k.mongodb.net/?retryWrites=true&w=majority`
  
    try{
      await mongoose.connect(URL, {useUnifiedTopology:true,useNewUrlParser:true,w:'majority'});
       console.log('database connceted ');
    }catch(error){
        console.log('Error while connecting to the databse',error.message);


    }

}
export default Connection;