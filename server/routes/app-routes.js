"use strict";

var controller = require('../controllers/app-controller');

exports.init = function(app){	
    app.route('/issues.json').get(controller.getIssues);
	app.route('/users/current.json').get(controller.getCurrent);
	app.route('/enumerations/time_entry_activities.json').get(controller.getTimeEntryActivities);
	app.route('/time_entries.json').post(controller.postTimeEntryActivities);
};
