var gulp = require('gulp'),
    sass = require('gulp-sass'),
    htmlmin = require('gulp-htmlmin'),
    watch = require('gulp-watch'),
    cssnano = require('gulp-cssnano'),

    compass = require('gulp-compass');


var config = {
    'src': './src',
    'dest': './dist',

    'html': {
        'src': './src/*.html',
        'dest': './dist/'
    },
    'sass': {
        'dest': './dist/styles/css',
        'src': './src/styles/sass/style.scss'
    },
    'js': {
        'src': [
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/popper.js/dist/popper.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            './src/js/*.js'
        ],
        'dest': './dist/js'
    },
    'img': {
        'dest': './dist/img/',
        'src': './src/img/*'
    }
};


gulp.task('sass', function (){
    gulp.src(config.sass.src)
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest(config.sass.dest))
});



gulp.task('copy:html', function () {
    return gulp.src(config.html.src)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.html.dest));
});


gulp.task('copy:js', function () {
    return gulp.src( './src/js/*.js')
        .pipe(gulp.dest('./dist/js'));
});


gulp.task('minify:img', function () {
        return gulp.src(config.img.src)
            .pipe(imagemin())
            .pipe(gulp.dest(config.img.dest));
    }
);

gulp.task('build',['copy:html', 'minify:img', 'sass', 'copy:js'], function () {});


gulp.task('watch', function () {
    gulp.watch([
        './src/styles/sass/style.scss',
        './src/js/*.js',
        './src/*.html'
    ], ['build']);
});





