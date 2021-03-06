/**
 * This file is part of the imboclient-js package
 *
 * (c) Espen Hovlandsdal <espen@hovlandsdal.com>
 *
 * For the full copyright and license information, please view the LICENSE file that was
 * distributed with this source code.
 */
'use strict';

var crypto = require('crypto')
  , fs     = require('fs');

module.exports = {
    sha256: function(key, data) {
        return crypto.createHmac('sha256', key).update(data, 'utf8').digest('hex');
    },

    md5: function(buffer, callback, options) {
        // String?
        if (options && options.type === 'string') {
            var encoding = options.binary ? undefined : 'utf8';
            return setImmediate(
                callback,
                undefined,
                crypto.createHash('md5').update(buffer, encoding).digest('hex')
            );
        }

        // File, then.
        fs.stat(buffer, function(err, stats) {
            if (err || !stats.isFile()) {
                return callback('File does not exist (' + buffer + ')');
            }

            var md5 = crypto.createHash('md5');
            var stream = fs.createReadStream(buffer);
            stream.on('data', function(data) {
                md5.update(data);
            });

            stream.on('end', function() {
                callback(undefined, md5.digest('hex'), stats);
            });
        });
    }
};