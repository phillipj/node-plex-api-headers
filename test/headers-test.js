'use strict';

var assert = require('assert');
var PlexAPI = require('plex-api');

var headers = require('../');

it('is a function', function() {
    assert.equal(typeof headers, 'function');
});

it('throws when called with invalid PlexAPI object', function() {
    assert.throws(function() {
        headers();
    }, /A PlexAPI object containing .options is required$/);
});

it('returns an object with X-Plex headers', function() {
    var client = new PlexAPI('localhost');

    var createdHeaders = headers(client);

    Object.keys(createdHeaders).forEach(function(headerName) {
        assert(startsWith('X-Plex', headerName), headerName + ' is an X-Plex header');
    });
});

function startsWith(str, input) {
    return input.indexOf(str) === 0;
}