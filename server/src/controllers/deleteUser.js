import User from "../models/user.js";
import Expense from "../models/expense.js";

const deleteUser = async (req, res) => {
  console.log(req.params)
  const { userId } = req.params;
  console.log("Deleting user with ID:", userId);

  try {
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.findByIdAndDelete(userId);
    await Expense.deleteMany({ userId }); 
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

export default deleteUser;
