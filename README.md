# gulp-cordova-android-versionCode

> Sets the android versionCode in the config.xml of the cordova project.

## Installation

```bash
npm install --save-dev gulp-cordova-android-versionCode
```

## Usage

```JavaScript
var gulp = require('gulp'),
    create = require('gulp-cordova-create'),
    versionCode = require('gulp-cordova-android-versionCode');

gulp.task('build', function() {
    return gulp.src('dist')
        .pipe(create())
        .pipe(versionCode(123));
});
```

This will set the android-versionCode attribute in the `config.xml` file.

## API

### versionCode(versionCode)

#### name

*Required*
Type: `integer`

The versionCode of an android build of the application.

## Related

See [`gulp-cordova`](https://github.com/SamVerschueren/gulp-cordova) for the full list of available packages.

## Contributors

- Simon Bang Terkildsen [<terkildsen@monsenso.com>]

## License

MIT © Simon Bang Terkildsen
