
import user from "../model/userModel.js";

export const signup=async(req,res)=>{
    try {
         const userData=new user(req.body);
         const savedData=await userData.save();
         res.status(200).json(savedData)

    } catch (error ) {
        res.status(500).json({msg:"internal server error"})
    }
}