const {default: mongoose} = require('mongoose')
const connection = {}
export const connectDB = async ()=>{
    try{
        if(connection.isConnected){
            console.log("using existing connections")
            return;
        }
        const db =await mongoose.connect(process.env.MONGO);
        connection.isConnected = true;
    }
    catch(err){
        console.log(err);
        throw new Error(err);
    }
}