const gulp = require('gulp');
const gulpPug = require('gulp-pug');

function pug() {
    return gulp.src('./web/**/*.pug')
        .pipe(gulpPug({
            pretty: true
        }))
        .pipe(gulp.dest('./web/'))
}

gulp.watch('./web/**/*.pug', pug);

gulp.task('default', gulp.series(pug));
