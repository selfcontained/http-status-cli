'use strict';

var statusCodes = require('./status-codes');

if (!process.argv[2]) {
    return false;
}

var code = statusCodes[process.argv[2]];
if (code) {
    console.log('%d - %s \n\r%s', process.argv[2], code.message, code.description);
} else {
    console.log('HTTP status code not found');
}
