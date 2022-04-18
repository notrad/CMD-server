const RateLimiter = require('express-rate-limit');

const limiter = RateLimiter({
    windowMs: 1*60*1000,
    max: 10
});

module.exports = limiter;