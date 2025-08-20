import ratelimiter from "../config/upstash.js";

const rateLimitMiddleware = async (req, res, next) => {
  try {
    const key = req.ip || req.headers['x-forwarded-for'] || 'anonymous';
    const { success } = await ratelimiter.limit(key);
    if (!success) {
        console.warn("Rate limit exceeded");
      return res.status(429).json(
        { message: "Too many requests" }
      );
    }
    next();
  } catch (error) {

    console.error("Rate limit exceeded:", error);
    res.status(429).json({ message: "Too many requests" });
  }
};

export default rateLimitMiddleware;
