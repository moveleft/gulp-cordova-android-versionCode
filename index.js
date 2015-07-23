'use strict';

/**
 * Sets the android versionCode in the config.xml of the cordova project.
 *
 * @author terkill      <terkildsen@monsenso.com>
 * @since  23 July 2015
 */

// module dependencies
var path = require('path'),
    through = require('through2'),
    gutil = require('gulp-util'),
    Config = require('cordova-config');

// export the module
module.exports = function(versionCode) {

    var project;

    return through.obj(function(file, enc, cb) {
        project = file;

        // Pipe the file to the next step
        this.push(file);

        cb();
    }, function(cb) {
        try {
            var config = new Config(path.join(project.path, 'config.xml'));

            config.setAndroidVersionCode(versionCode);

            config.write(function() {
                cb();
            });
        }
        catch(err) {
            // Oh no, something happened!
            cb(new gutil.PluginError('gulp-cordova-android-versionCode', err.message));
        }
    });
};
