var chalk = require('chalk');
var dateformat = require('dateformat');

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { 
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

var Logger = function() {
    chalk.enabled = chalk.enabled || true;
};

Logger.prototype.log = function (){	
    var time = '['+chalk.grey(dateformat(new Date(), 'HH:MM:ss'))+']';	
	time += chalk.green(' [Lazymine] ');

    for (var i = 0; i < arguments.length; i++) {		
        if(typeof arguments[i] === 'number'){	
			time += chalk.cyan(arguments[i]);			
        }
        else if (typeof arguments[i] === 'object'){            
			time += chalk.yellow(JSON.stringify(arguments[i]));	
        }
		else {
			time += arguments[i]
		}
		time += ' ';
    }

    console.log.apply(console, [time]);
    return this;
};

Logger.prototype.error = function(){
    var time = '['+chalk.grey(dateformat(new Date(), 'HH:MM:ss'))+']';
    process.stdout.write(time + ' ' + chalk.red('[Lazymine] '));

    for (var i = 0; i < arguments.length; i++) {
        arguments[i] = chalk.red(arguments[i]);
    }

    console.log.apply(console, arguments);
};

module.exports = new Logger();
