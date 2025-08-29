import user from "../models/user.js"

const userDetails = (async (req,res) =>{
    console.log("reached the user details end point");
    const userId = req.query.id;
    console.log("finding about the user:", userId);
    try {
        const userDetails = await user.findById(userId);
        if (!userDetails) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("details of user: ", userDetails);
        return res.status(200).json(userDetails);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
})

export default userDetails;