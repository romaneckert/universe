const gulp = require('gulp');
const gulpPug = require('gulp-pug');
const del = require('del');

gulp.task('clean', (cb) => {
    del.sync(['./web/**/*.html']);
    cb();
});

gulp.task('pug', () => {
    return gulp.src('./web/**/*.pug')
        .pipe(gulpPug({
            pretty: true
        }))
        .pipe(gulp.dest('./web/'));
});

gulp.task('watch', () => {
    gulp.watch('./web/**/*.pug', gulp.series('pug'));
});

gulp.task('default', gulp.series('clean', 'pug', 'watch'));
