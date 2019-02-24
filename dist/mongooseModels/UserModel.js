"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    userName: {
        type: String,
        required: 'Enter a first name'
    },
    password: {
        type: String,
        required: 'Enter a last name'
    },
    picture: {
        type: String,
        required: 'Enter a picture'
    },
    ranking: {
        type: Number,
        default: 0
    },
    scores: {
        score_global: Number,
        score_theme: [{
                theme: String,
                score: Number
            }],
        score_quiz: [{
                id_quizz: String,
                score: Number
            }],
        score_challlenge: [{
                id_challenger: String,
                result: String
            }]
    },
    friendsList: [{
            friendId: String
        }]
});
//# sourceMappingURL=UserModel.js.map