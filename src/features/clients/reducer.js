"use strict";
var redux_1 = require('redux');
var typesafe_actions_1 = require('typesafe-actions');
var clients = require('./actions');
exports["default"] = redux_1.combineReducers({
    clients: function (state, action) {
        if (state === void 0) { state = []; }
        switch (action.type) {
            case typesafe_actions_1.getType(clients.add):
                return state.concat([action.payload]);
            default:
                return state;
        }
    }
});
