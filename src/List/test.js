const assert = require('assert');

const List = require('./index');
var names = new List();

before(async function () {
    names.append('name1');
    names.append('name2');
    names.append('name3');
    names.append('name4');
    names.append('name5');
    names.append('name6');
});

describe('List', function () {
    describe('#List.position', function () {
        it('should be return 0 when initial the new List', function () {
            assert.equal(names.position, 0);
        })
    });
    describe('#List.getElement', function () {
        it('should be return name1 when', function () {
            assert.equal(names.getElement(), 'name1');
        })
    });
    describe('#List.next', function () {
        before(function () {
            names.next();
        });
        it('should be return name2 when exec next()', function () {
            assert.equal(names.getElement(), 'name2');
        })
    });
});
