"use strict";
var redux_1 = require('redux');
var clients_1 = require('../features/clients');
var rootReducer = redux_1.combineReducers({
    clients: clients_1.clientReducer
});
exports["default"] = rootReducer;
