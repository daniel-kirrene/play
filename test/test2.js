var test = require('tape');
var rats = require('../src/rats')

var myRats = new rats.Rats(['gary','janet','jordan','danny','charles','joe','jeremy','jessica','julie']);

test("Should return ['gary']", function(t) {
    t.deepEqual(['gary'], myRats.namesBeginningWith('g'));
    t.end();
});