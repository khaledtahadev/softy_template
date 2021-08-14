// - For Run Gulp Tasks
var gulp = require('gulp');

// - For Compile Pug File To Html
var pug = require('gulp-pug');

// - For minify JS Files
var uglify = require('gulp-uglify')

// - For Minify CSS Files 
var minifyCss = require('gulp-clean-css')

// - For AutoPrefixer CSS Files
var autoPrefixer = require('gulp-autoprefixer')

// - For Concat Files
var concat = require('gulp-concat')




  // Tasks Runner

// Tasks For Pug To Html
gulp.task('html', function(){
  return gulp.src('pug/pages/*.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'))
});

// Tasks For AutoPrefixer and Minify CSS
gulp.task('css', function(){
  return gulp.src(['css/bootstrap.css', 'css/font-awesome.css','css/main.css'])
    .pipe(autoPrefixer('last 5 version'))
    .pipe(concat('all.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'))
});

// Tasks For Minify Javascript
gulp.task('js', function(){
  return gulp.src(['js/jquery-3.5.1.js',
    'js/bootstrap.bundle.js', 
    'js/main.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

// Tasks Watch Files For Any Change
gulp.task('watch', function(){
  //- Watch For Pug
  gulp.watch('pug/**/*.pug', ['html'])
  
  //- Watch For CSS
  gulp.watch('css/*.css', ['css'])

  //- Watch For Javascript
  gulp.watch('js/*.js', ['js'])
});
gulp.task('default', ['watch']) // For Make Task Watch A Default