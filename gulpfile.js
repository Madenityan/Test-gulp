var gulp = require('gulp'),
    sass = require('gulp-sass'),
    htmlmin = require('gulp-htmlmin'),
    watch = require('gulp-watch'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
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
            './node_modules/tether/dist/tether.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            './src/js/*.js'
        ],
        'dest': './dist/js'
    },
    'img': {
        'dest': './dist/img',
        'src': './src/img/*'
    }
};

gulp.task('compass', function() {
    gulp.src('./src/styles/sass/*.scss')
        .pipe(compass({
            config_file: 'config.rb',
            css: 'style',
            sass: './src/styles/sass'
        }))
        .pipe(gulp.dest('./src/styles/css'));
});

gulp.task('css-minify', function (){
    gulp.src('./src/styles/css/*')
        .pipe(cssnano())
        .pipe(rename('min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(config.sass.dest))
});

// for watch only
gulp.task('css-copy', function (){
    gulp.src('./src/styles/css/*')
        .pipe(rename('min.css'))
        .pipe(gulp.dest(config.sass.dest))
});


gulp.task('copy:html', function () {
    return gulp.src(config.html.src)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.html.dest));
});

gulp.task('copy:js', function () {
    return gulp.src( './src/js/*.js')
        .pipe(uglify())
        .pipe(concat('min.js'))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('minify:img', function () {
    return gulp.src(config.img.src)
        .pipe(imagemin())
        .pipe(gulp.dest(config.img.dest));
    }
);

gulp.task('build', ['compass', 'css-minify', 'copy:html', 'minify:img', 'copy:js'], function () {});
gulp.task('build-watch', ['compass', 'css-copy', 'copy:html', 'copy:js'], function () {});


gulp.task('watch', function () {
    gulp.watch([
        './src/styles/sass/style.scss',
        './src/styles/sass/**/*.scss',
        './src/js/*.js',
        './src/*.html'
    ], ['build']);
});




