const { src, dest, } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require('gulp-uglify-es').default;

function scripts() {
	return src(['app/js/main.js','app/js/2.js','app/js/3.js','app/js/4.js'])
	.pipe(concat('main.min.js'))
	.pipe(uglify())
	.pipe(dest('app/js'))
}

function styles() {
  return src(['app/scss/style.scss', 'app/scss/mainStyle.scss', 'app/scss/3.scss', 'app/scss/4.scss'])
    .pipe(concat("style.min.css"))
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("app/css"));
}


exports.styles = styles;
exports.scripts = scripts;


