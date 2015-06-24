"use strict";
var logger = require('../logger.js'),
    request = require('request'),
	current = require("../assets/current.json"),
	time_entry_activities = require("../assets/time_entry_activities.json"),
    issues = require("../assets/issues.json");  

exports.default = function (req, res) {
	var routes = req.app._router.stack,
		response = '<h2>Available Routes</h2><ul>';
	
	for (var i = 0; i < routes.length; i++) {
		if(routes[i].route) {
			for (var j = 0; j < routes[i].route.stack.length; j++) {						
				response += '<li>' + routes[i].route.stack[j].method.toUpperCase() + ' ' + routes[i].route.path + '</li>';			
			}
		}
	}
	
	response += '</ul>';
	
	res.send(response);
};
	
exports.getIssues = function (req, res) {
	logger.log('Received request getIssues', req.query);
	if(req.query.status_id === '1') {
		res.send(issues);
	}
	else {
		res.status(200).json({"issues":[],"total_count":0,"offset":0,"limit":25});
	}
};

exports.getCurrent = function (req, res) {
	logger.log('Received request getCurrent', req.query);
	res.send(current);
};

exports.getTimeEntryActivities = function (req, res) {
	logger.log('Received request getTimeEntryActivities', req.query);
	res.send(time_entry_activities);
};

exports.postTimeEntryActivities = function (req, res) {
	logger.log('Received request postTimeEntryActivities', req.query, req.body);
	res.status(201).send({});
};
