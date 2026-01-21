class AppError extends Error {
    constructor(
        name,
        message,
        explanation,
        statusCode
    ) {
        super();
        this.name = this.name;
        this.message = this.message;
        this.explanation = this.explanation;
        this.statusCode = this.statusCode;
    }
}

module.exports = AppError;