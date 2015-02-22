var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var jade = require('gulp-jade');

gulp.task('jade', function() {
    var YOUR_LOCALS = {};

    gulp.src('./src/*.jade')
    .pipe(jade({
        locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('less', function () {
    return gulp.src('./src/**/*.less')
    .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes')  ]

    }))
    .pipe(gulp.dest('./dist'));

});
