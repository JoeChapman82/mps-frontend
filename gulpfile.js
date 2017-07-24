/*jshint esversion: 6 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');
const pump = require('pump');


gulp.task('sass', function(){
  return gulp.src(__dirname + '/development/sass/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest(__dirname + '/app/public/assets/styles'))
  .pipe(browserSync.reload({
  stream: true
}));
});

gulp.task('watch', ['sass'], function(){
    console.log(__dirname + '/development/scripts/main.js');
  gulp.watch(__dirname + '/development/sass/**/*.scss',['sass'],  browserSync.reload());
  gulp.watch(__dirname + '/development/scripts/**/*.js', ['uglyjs', 'uglyjs2'], browserSync.reload());
  gulp.watch(__dirname + '/app/public/**/*.njk', ['reload'], browserSync.reload());
});

gulp.task('reload', function() {
    browserSync.reload();
});

gulp.task('uglyjs', function (cb) {
  pump([
    gulp.src(__dirname + '/development/scripts/main.js'),
    uglify(),
    gulp.dest(__dirname + '/app/public/assets/scripts')
  ],
  cb
)
.pipe(browserSync.reload({
stream: true
}));
});

gulp.task('uglyjs2', function (cb) {
  pump([
    gulp.src(__dirname + '/development/scripts/loading.js'),
    uglify(),
    gulp.dest(__dirname + '/app/public/assets/scripts')
  ],
  cb
)
.pipe(browserSync.reload({
stream: true
}));
});

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: 'localhost:3000',
    port: 3001,
    reloadDelay: 3000,
    ghostMode: {
    clicks: false,
    forms: false,
    scroll: false
},
    open: false
  });
});

gulp.task('server', function() {
  nodemon({
    script: 'server.js',
    ext: 'js',
  }).on('quit', function() {
    process.exit(0);
  });
});

gulp.task('default', function (done) {
  runSequence('watch', 'sass', 'uglyjs', 'uglyjs2', 'server', 'browserSync', done);
});
