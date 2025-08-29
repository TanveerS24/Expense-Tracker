const loginFailed = (req, res) => {
    res.status(401).json({ message: "Login failed" });
};

export default loginFailed;
