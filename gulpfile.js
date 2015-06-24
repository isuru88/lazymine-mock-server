var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('mock-server', function() {
    nodemon({
        script: 'server.js'
        , ext: 'js json'
        , env: { 'NODE_ENV': 'development' }
    })
});
