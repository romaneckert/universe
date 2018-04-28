const gulp = require('gulp');
const pug = require('gulp-pug');
const exec = require('child_process').exec;
const del = require('del');

gulp.task('clean', (cb) => {
    del.sync(['./web/**/*.html']);
    cb();
});

gulp.task('pug', () => {
    return gulp.src('./web/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./web/'));
});

gulp.task('i18n', (cb) => {
    exec('npm run i18n', (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})

gulp.task('watch', () => {
    gulp.watch('./web/**/*.pug', gulp.series('pug', 'i18n'));
});

gulp.task('default', gulp.series('clean', 'pug', 'i18n', 'watch'));
