var gulp = require("gulp");

gulp.task("copy-html",async ()=>{
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\Lee"));
});
gulp.task("copy-php",async ()=>{
	gulp.src("*.php")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\Lee\\php"));
});
gulp.task('copy-css',async ()=>{
	gulp.src('css/**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\Lee\\css'));
});

gulp.task('copy-img',async ()=>{
	gulp.src('img/*.{jpg,jpeg,gif,png}')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\Lee\\img'));
});


gulp.task('copy-font',async ()=>{
	gulp.src('font/*.{eot,ttf,svg,woff}')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\Lee\\font'));
});

gulp.task('copy-js',async ()=>{
	gulp.src('js/**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\Lee\\js'));
});

gulp.task('watch-all',async ()=>{
	//监视index.html文件是否有变化，如果有变化，就执行任务：copy-index
 	gulp.watch("*.html",async ()=>{
		gulp.src("*.html")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\Lee"));
	});
	gulp.watch("*.php",async ()=>{
		gulp.src("*.php")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\Lee\\php"));
	});
	gulp.watch('css/**/*',async ()=>{
		gulp.src('css/**/*')
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\Lee\\css'));
	});
	gulp.watch('img/*.{jpg,jpeg,png,gif}',async ()=>{
		gulp.src('img/*.{jpg,jpeg,gif,png}')
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\Lee\\img'));
	});
	// gulp.watch('font/*.{eot,ttf,svg,woff}',async ()=>{
	// 	gulp.src('font/*.{eot,ttf,svg,woff}')
	// 	.pipe(gulp.dest('D:\\phpStudy\\WWW\\Lee\\font'));
	// });
	gulp.watch('js/**/*',async ()=>{
		gulp.src('js/**/*')
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\Lee\\js'));
	});
});
