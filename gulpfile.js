const path = require('path');
const gulp = require('gulp');
const Dgeni = require('dgeni');

gulp.task('docs', []);

gulp.task('api-docs', function() {
    const docsPackage = require(path.resolve(__dirname, 'docs/config'));
    const docs = new Dgeni([docsPackage]);
    return docs.generate();
});
