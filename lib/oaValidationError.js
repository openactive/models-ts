"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OaValidationError = void 0;
class OaValidationError extends Error {
    constructor(type, item, validationError) {
        super(`Object is not a valid "${type}". Check \`.item\` and \`.validationError\` for more info`);
        this.name = 'OaValidationError';
        this.item = item;
        this.validationError = validationError;
    }
}
exports.OaValidationError = OaValidationError;
