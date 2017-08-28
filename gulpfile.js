var gulp         = require('gulp');
var util         = require('gulp-util');
var sass         = require('gulp-sass');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sorting      = require('postcss-sorting');
var flexbugs     = require('postcss-flexbugs-fixes');
var cssnano      = require('cssnano');
var plumber      = require('gulp-plumber');
var runSequence  = require('run-sequence');
var server       = require('browser-sync').create();

// default taks
gulp.task('default', function (cb) {
  runSequence(['sass'], 'sass:watch', 'server',
    cb
  )
})

var processors = [
  autoprefixer({
    browsers: ['last 10 versions'],
    remove: true, // remove outdated prefixes?
    // cascade: false
  }),
  sorting(),
  flexbugs()
];

var cssNanoParams = {
  autoprefixer: false,
  reduceIdents: {
    keyframes: false
  },
  discardUnused: {
    keyframes: false
  }
}

// Sass task
gulp.task('sass', function() {
  return gulp
    .src('./pcss/*.{sass,scss}')
    .pipe(sass({
        outputStyle: 'expanded', // nested, expanded, compact, compressed
        precision: 5,
        includePaths : ['./pcss']
    }))
    .pipe(postcss(processors))
    // .pipe(config.production ? postcss([cssnano(cssNanoParams)]) : util.noop())
    // .pipe(plumber({
    //   errorHandler: config.errorHandler
    // }))
    .pipe(gulp.dest('css'))
});

gulp.task('sass:watch', function() {
  gulp.watch('./pcss/*.{sass,scss}', ['sass']);
});


gulp.task('server', function() {
  server.init({
    server: {
      baseDir: './',
      directory: false,
      serveStaticOptions: {
        extensions: ['html']
      }
    },
    files: [
      './*.html',
      './css/*.css',
      './js/*.js'
    ],
    port: 3000,
    logLevel: 'info', // 'debug', 'info', 'silent', 'warn'
    logConnections: false,
    logFileChanges: true,
    open: true,
    notify: false,
    ghostMode: false,
    online: false,
    tunnel: null
  });
});
