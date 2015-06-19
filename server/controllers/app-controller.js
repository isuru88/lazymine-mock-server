"use strict";
var logger = require('../logger.js'),
    request = require('request'),
	current = require("../assets/current.json"),
	time_entry_activities = require("../assets/time_entry_activities.json"),
    issues = require("../assets/issues.json");    
	
exports.getIssues = function (req, res) {
	if(req.query.status_id === '1') {
		res.send(issues);
	}
	else {
		res.status(200).json({"issues":[],"total_count":0,"offset":0,"limit":25});
	}
};

exports.getCurrent = function (req, res) {
	res.send(current);
};

exports.getTimeEntryActivities = function (req, res) {
	res.send(time_entry_activities);
};

exports.postTimeEntryActivities = function (req, res) {
	res.status(201).send();
};
