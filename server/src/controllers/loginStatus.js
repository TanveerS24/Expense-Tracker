const loginStatus = (req, res) => {
    if (req.user) {
        res.status(200).json({ message: "User is logged in", user: req.user });
    } else {
        res.status(401).json({ message: "User is not logged in" });
    }
};

export default loginStatus;
