var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifyJs = require('gulp-uglifyjs');
var BS = require('browser-sync');
var babelCore = require('babel-core');
var del = require('del');
var concat = require('gulp-concat');

var config = {
    app: './app',
    dist: './dist'
};

gulp.task('test', function(){
    console.log('Gulp works');
});

// default
gulp.task('default', ['test', 'css', 'js', 'assets', 'watch', 'server'], function(){
    console.log('Default task');
});

gulp.task('js', function(){
    gulp.src('./app/js/**/*.js')
        // .pipe(uglifyJs())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(BS.reload({stream:true}))
});

gulp.task('css', function () {
    gulp.src('./app/css/**/*.css')
        .pipe(gulp.dest('./dist/css/'))
        .pipe(BS.reload({stream:true}))
});

gulp.task('assets', function () {
    return gulp.src('./app/assets/**/*')
        .pipe(gulp.dest('./dist/'))
        .pipe(BS.reload({stream:true}))
});

gulp.task('clr', function() {
    return del('./dist/*');
});

// watcher
gulp.task('watch', function(){
    gulp.watch('./app/js/**/*.js', ['js']);
    gulp.watch('./app/css/**/*.css', ['css']);
    gulp.watch('./app/assets/**/*', ['assets']);
});

// server
gulp.task('server', function () {
    BS({
        server: {
            baseDir: config.dist
        }
    })
});