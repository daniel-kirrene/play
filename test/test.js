var test = require('tape');
var work = require('../src/work')

test('Should return 4', function(t) {
    t.equal(4, work.sum(2,2));
    t.end();
});

test('Should return Gary', function(t) {
    t.equal('Gary', work.blah);
    t.end();
});