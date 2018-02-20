const fs            = require('fs');
let gulp            = require('gulp'),
    runSequence     = require('run-sequence'),
    concat		    = require('gulp-concat'),
    sass		    = require('gulp-sass'),
    sourcemaps	    = require('gulp-sourcemaps'),
    prefixer	    = require('gulp-autoprefixer'),
    svgo            = require('gulp-svgo');


gulp.task('sass', () =>
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


gulp.task('svg', () => 
{
    return gulp.src('./svg/*')
        .pipe(svgo())
        .pipe(gulp.dest('./dist/svg'));
});


gulp.task('default', function()
{
    runSequence('sass', 'svg');
});