"use strict";
var cuid = require('cuid');
var typesafe_actions_1 = require('typesafe-actions');
var ADD = 'clients/ADD';
exports.add = typesafe_actions_1.createAction(ADD, function (resolve) {
    return function (name) { return resolve({ name: name, id: cuid() }); };
});
