const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')
const pug=require('gulp-pug')
const prefix=require('gulp-autoprefixer')
const reload = browserSync.reload


gulp.task('browser-sync', function () {
  browserSync.init({
    server:{
      baseDir: './'
    }
  })

  gulp.watch('./**/*.html',['html'])
  gulp.watch('./scss/**/*.scss', ['css'])
  gulp.watch('./javascript/**/*.js',reload)
})


gulp.task('css', () => {
  return gulp.src('./scss/main.scss')
  .pipe(sass())
  .pipe(prefix())
  .pipe(gulp.dest('./'))
  .pipe(browserSync.stream())
})
gulp.task('html',()=>{
  return gulp.src('/*.html')
  .pipe(pug())
  .pipe(gulp.dest('./'))
  .on('end',reload)
})

gulp.task('default', ['browser-sync','html', 'css'])
