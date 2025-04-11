const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Tarea para compilar SASS a CSS
gulp.task("sass", function () {
    return gulp.src("scss/main.scss") // Ruta de los archivos SASS
        .pipe(sass().on("error", sass.logError)) // Compila y maneja errores
        .pipe(gulp.dest("css")); // Carpeta de destino
});

// Tarea para observar cambios y compilar automáticamente
gulp.task("watch", function () {
    gulp.watch("scss/**/*.scss", gulp.series("sass"));
});

// Tarea por defecto
gulp.task("default", gulp.series("sass", "watch"));
