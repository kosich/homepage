var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    plumber = require('gulp-plumber'),
    jade = require('gulp-jade'),
    watch = require('gulp-watch');

var paths = {
    js   : './src/**/*.js',
    jade : './src/**/*.jade',
    less : './src/**/*.less'
};

gulp.task( 'watch', function(){

    watch(paths.less, function(){
            gulp.start([ 'less' ]);
        } );

    watch(paths.jade, function(){
            gulp.start([ 'jade' ]);
        } );

} );

gulp.task('jade', function() {
    return gulp.src( paths.jade )
        .pipe(jade())
        .pipe( plumber() )
        .pipe(gulp.dest('./dist/'))
});

gulp.task('less', function () {
    return gulp.src( paths.less )
        .pipe( plumber() )
        .pipe(less())
        .pipe(gulp.dest('./dist'));

});

gulp.task('default', [ 'jade', 'less', 'watch' ] );
