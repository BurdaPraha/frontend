const fs            = require('fs');
var gulp            = require('gulp'),
    runSequence     = require('run-sequence'),
    concat		    = require('gulp-concat'),
    sass		    = require('gulp-sass'),
    sourcemaps	    = require('gulp-sourcemaps'),
    prefixer	    = require('gulp-autoprefixer');


gulp.task('sass', function (cb)
{
        return gulp
            .src('./scss/base.scss')
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(prefixer({
                browsers: ['last 3 versions', 'IE 9'],
                cascade: false
            }))
            .pipe(sourcemaps.write())
            .pipe(concat('style.css'))
            .pipe(gulp.dest('./dist/css'));
});


gulp.task('default', function()
{
    runSequence('sass');
});