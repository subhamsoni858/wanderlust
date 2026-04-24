class ExpressError extends Error {
  constructor(statusCode, message) {
    super(message); // sets err.message properly
    this.statusCode = statusCode;
  }
}

module.exports = ExpressError;
