var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-clean-css');

var path = {

    css: {
        watch: 'src/styles/**/*.scss',
        src: 'src/styles/**/*.scss',

        buildDir: 'www/css/',
        buildFile: 'styles.css',
        buildLibsFile: 'libs.min.css'
    },

    js: {
        src: [
            'src/scripts/**/*.js'
        ],

        buildDir: 'www/js/',
        buildAppFile: 'app.js',
        buildLibsFile: 'libs.min.js'
    }
};

var libs = {
    js: [
        'node_modules/angular/angular.js',
        'node_modules/jquery/dist/jquery.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-aria/angular-aria.js',
        'node_modules/angular-animate/angular-animate.js',
        'node_modules/angular-touch/angular-touch.js',
        'node_modules/angular-material/angular-material.js',
        'node_modules/ngstorage/ngStorage.js',
        'node_modules/bootstrap/dist/js/bootstrap.js'
    ],

    css: [
        'node_modules/angular-material/angular-material.css',
        'node_modules/bootstrap/dist/css/bootstrap.css'
    ]
};

// *** *** *** MAIN TASKS *** *** ****

var tasks = [
    'build:css',
    'build:js:libs',
    'build:css:libs',
    'build:js'
];

var devTasks = tasks.concat('watch');

gulp.task('default', tasks);

gulp.task('dev', devTasks);

gulp.task('watch', function () {

    gulp.watch(path.css.watch, ['build:css']);

    gulp.watch(path.js.src, ['build:js']);

});

gulp.task('build:css', function () {
    return gulp.src(path.css.src)
        .pipe(sass())
        .pipe(concatCss(path.css.buildFile))
        .pipe(gulp.dest(path.css.buildDir))
        .pipe(minifyCss())
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest(path.css.buildDir));
});

gulp.task('build:js', function() {
    return gulp.src(path.js.src)
        .pipe(concat(path.js.buildAppFile))
        .pipe(gulp.dest(path.js.buildDir))

        .pipe(uglify({ mangle: false }))
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest(path.js.buildDir));
});

gulp.task('build:js:libs', function() {
    return gulp.src(libs.js)
        .pipe(concat(path.js.buildLibsFile))
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest(path.js.buildDir));
});

gulp.task('build:css:libs', function() {
    return gulp.src(libs.css)
        .pipe(concat(path.css.buildLibsFile))
        .pipe(minifyCss())
        .pipe(gulp.dest(path.css.buildDir));
});