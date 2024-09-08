export const signup  = async (req, res) =>{
    const {email , password , name} = req.body;

    try{

    }
    catch(err){

    }







    res.send("Signup route");
}
export const login  = async (req, res) =>{
    res.send("login route");
}
export const logout  = async (req, res) =>{
    res.send("logout route");
}
