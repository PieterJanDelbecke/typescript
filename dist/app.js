"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Pieter";
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error occurred', 500);
//# sourceMappingURL=app.js.map