import rateLimit from "express-rate-limit";

export const rateLimiterUsingThirdParty = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,
  message: "You have exceeded the 100 requests in 5 minutes limit!",
  standardHeaders: true,
  legacyHeaders: false,
});
