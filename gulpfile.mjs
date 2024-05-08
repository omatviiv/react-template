import gulp from 'gulp';
import svgo from 'gulp-svgo';
import watch from 'gulp-watch';
import path from 'path';

const getTimestamp = () => {
  const date = new Date();

  return `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`;
};

const SVG_WATCH = 'src/**/*.svg';

const optimizeSvgs = () => {
  return gulp.src(SVG_WATCH)
    .pipe(svgo())
    .pipe(gulp.dest('src'));
};

const watchSvgs = () => {
  watch(SVG_WATCH, { events: ['add', 'change'] }, (vinyl) => {
    const filePath = path.relative(process.cwd(), vinyl.path);

    console.log(`${getTimestamp()} detected svg ${vinyl.event}: ${
      filePath
    } - starting optimisation...`);

    optimizeSvgs();

    console.log(`${getTimestamp()} ... ${filePath} - optimisation done`);
  });

};

export default gulp.series(optimizeSvgs, watchSvgs);
