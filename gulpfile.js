'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('./package.json');
var replace =require('gulp-replace');
var concat = require('gulp-concat');
var mergeStream = require('merge-stream');
var foreach = require('gulp-foreach');
var fs = require('fs');
 
gulp.task('sass', function () {
  return gulp.src('./public/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./public/css/**/*.scss', ['sass']);
});

var paths = [];
gulp.task('cuat', ['packNodeModules'], function() {
	var base = config.name;
	var nodeModulesUrl = 'https://wpc-stage.com/production/whirlpool/refer-landing'
	var tasks  = []

	tasks.push(gulp.src('./app/**/*.+(js|html)')
		.pipe(replace('app/', '/javascript/'+base+'/'))
		.pipe(replace('./public/images', '/images/'+base))
		.pipe(replace(/<header.*><\/header>/g, ''))
		.pipe(replace(/<footer.*><\/footer>/g, ''))
		.pipe(replace(/'\.\/([^']*)'/g, '\'./$1.js\''))
		.pipe(gulp.dest('./cuat/javascript/'+base+'/')))

	tasks.push(gulp.src('./public/css/**/*.css')
		.pipe(replace('../fonts/', ''))
		.pipe(replace('../images/', '/images/'+base+'/'))
		.pipe(replace('../../public/images/', '/images/'+base+'/'))
		.pipe(gulp.dest('./cuat/css/'+base+'/')))

	tasks.push(gulp.src('./public/fonts/**/*')
		.pipe(gulp.dest('./cuat/css/'+base+'/')))

	tasks.push(gulp.src('./public/js/**/*.js')
		.pipe(gulp.dest('./cuat/javascript/'+base+'/')))

	tasks.push(gulp.src('./public/images/**/*')
		.pipe(gulp.dest('./cuat/images/'+base+'/')))

	tasks.push(gulp.src('index.html')
		.pipe(replace('app/','/javascript/'+base+'/'))
		// .pipe(replace('node_modules', nodeModulesUrl+'/node_modules'))
		.pipe(replace(/("|')(node_modules\/.*)("|')/g, function(string) {
			//replace all node_modules references with a local reference
			var filename = string.match(/[^\/]*$/g)[0].replace(/"|'/g, '');
			return '"./public/js/'+filename+'"'
		}))
		.pipe(replace('./public/js', '/javascript/'+base))
		.pipe(replace('./public/css', '/css/'+base))
		.pipe(replace('./public/images', '/images/'+base))
		.pipe(replace(/<html.*>/g,'')).pipe(replace('</html>',''))
		.pipe(replace(/<body.*>/g,'')).pipe(replace('</body>',''))
		.pipe(replace(/<head.*>/g,'')).pipe(replace('</head>',''))
		.pipe(replace(/<title>.*<\/title>/g, ''))
		.pipe(gulp.dest('./cuat')))

	tasks.push(gulp.src(paths)
		.pipe(gulp.dest('./cuat/javascript/'+base+'/')));

	return mergeStream(tasks)
});

gulp.task('packNodeModules', function() {
	return gulp.src('index.html')
		.pipe(replace(/("|')(node_modules\/.*)("|')/g, function(string) {
			var path = string.replace(/"|'/g, '');
			paths.push(path);
			return string;
		}))
})

gulp.task('default', ['sass', 'sass:watch']);