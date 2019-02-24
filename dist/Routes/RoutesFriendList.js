"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FriendListController_1 = require("./../controllers/FriendListController");
class RoutesFriendList {
    constructor() {
        this.friendListContorller = new FriendListController_1.FriendListController();
    }
    routes(app) {
        app.route('/friendList/:userId').
            post(this.friendListContorller.addFriend).
            get(this.friendListContorller.getFriends);
    }
}
exports.RoutesFriendList = RoutesFriendList;
//# sourceMappingURL=RoutesFriendList.js.map