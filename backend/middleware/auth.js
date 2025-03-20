import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = (roles = []) => {
    if (typeof roles === "string") roles = [roles];

    return (req, res, next) => {
        const token = req.header("Authorization")?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({ message: "Access denied. You don't have permission to perform this action." });
            }

            next();
        } catch (error) {
            res.status(400).json({ message: "Invalid token." });
        }
    };
};

export default auth;