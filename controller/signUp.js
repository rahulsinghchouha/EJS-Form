const signUpData = require("../models/signUp");

exports.signup = async (req, res) => {
    const { name, email,gender } = req.body;
    const image1 = req.file.filename;

    console.log("data",name,email,gender,image1);
    //validation
    if (!name || !email || !gender ) {
        return res.status(404).json({
            success: false,
            msg: "Data not found",
        })
    }
    try {
        const response = await signUpData.create({
            name:name,
            gender:gender,
            email:email,
        
        });

        if(response)
        {
            return res.status(200).json({
                success: true,
                msg: "user created succesfully",
            })
        }
        else{
            return res.status(400).json({
                success: false,
                msg: "Account not created please enter a valid data and try again",
            })
        }
    }
    catch (error) {
        console.log("Entry error",error);
        return res.status(400).json({
            success: false,
            msg: "Account not created please enter a valid data and try again",
        })
    }
}