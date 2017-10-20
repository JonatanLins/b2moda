// Módulos do GULP
var browserSync  = require('browser-sync').create();
var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var htmlMin      = require('gulp-htmlmin');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');
var imagemin     = require('gulp-imagemin');
var ngrok        = require('ngrok');



// Variáveis de configuração
var srcPath      = 'src/';
var distPath     = 'dist/';



// Compressor de HTML
gulp.task('html', function() {
    gulp.src(srcPath + '*.html')
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest(distPath))
        .pipe(browserSync.reload({stream: true}));
});


// Processador de SASS, compressor, gerador de sourcemaps e autoprefixador de CSS
gulp.task('sass', function(){
    gulp.src(srcPath + 'sass/**/*.+(scss|sass)')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(distPath + 'css'))
        .pipe(browserSync.reload({stream: true}));
});


// Compressor de Javascript
gulp.task('js', function(){
    gulp.src(srcPath + 'js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(distPath + 'js'))
        .pipe(browserSync.reload({stream: true}));
});


// Compressor de imagens
gulp.task('img', function(){
    gulp.src(srcPath + 'img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(distPath + 'img'))
        .pipe(browserSync.reload({stream: true}));
});


// Copiar outros arquivos do projeto
gulp.task('files', function(){
    gulp.src(srcPath + 'files/**/*')
        .pipe(gulp.dest(distPath))
        .pipe(browserSync.reload({stream: true}));
});


// Inicializador do BrowserSync
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './',
        },
        port: 8080,
        startPath: '.',
    }, function (err, bs) {
        ngrok.connect({
            proto: 'http',
            addr: 8080,
            authtoken: '6sSZEU46iXCTdzwDVb9Et_6bDkknSEoqdEPAhmM4X39'
        }, function (err, url) {});
    });
});


// Assistir arquivos do projeto
gulp.task('watch', function() {
    gulp.watch(srcPath + '**/*.html', ['html']);
    gulp.watch(srcPath + 'sass/**/*.+(scss|sass)', ['sass']);
    gulp.watch(srcPath + 'js/**/*.js', ['js']);
    gulp.watch(srcPath + 'img/**/*', ['img']);
    gulp.watch(srcPath + 'files/**/*', ['files']);
});






// Tarefa padrão
gulp.task('default', ['browserSync', 'html', 'sass', 'js', 'img', 'files', 'watch']);
