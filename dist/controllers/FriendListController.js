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
const UserModel_1 = require("./../mongooseModels/UserModel");
const UserController_1 = require("./UserController");
const User = mongoose.model('User', UserModel_1.UserSchema);
class FriendListController {
    constructor() {
        this.userContorl = new UserController_1.UserController();
    }
    // add a friend to user's friend list
    addFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $push: { "friendsList": { "friendId": req.body.friendId } } }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    //get friends 
    getFriends(req, res) {
        User.find({}).where('_id').equals(req.params.userId).select('friendsList').exec((err, friendList) => {
            if (err) {
                res.json(err);
            }
            let tab = [];
            console.log(friendList[0]);
            for (let i = 0; i < friendList[0]['friendsList'].lenth; i++) {
                tab.push(friendList[0]['friendsList'][i]);
            }
            console.log(tab);
            User.find({}).where('_id').in(tab).exec((err, friends) => {
                if (err) {
                    res.json(err);
                }
                res.json(friends);
            });
        });
    }
    deleteFriend(req, res) {
        User.find({}).where('_id').equals(req.params.userId).select('friendsList').exec((err, user) => {
            if (err) {
                res.json(err);
            }
            res.json(user);
        });
    }
}
exports.FriendListController = FriendListController;
//# sourceMappingURL=FriendListController.js.map