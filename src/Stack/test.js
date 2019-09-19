const assert = require('assert');
const Stack = require('./index');

var books = new Stack();
before(function () {
    books.push('小时代');
    books.push('青铜时代');
    books.push('白银时代');
    books.push('黄金时代');
});

describe('Stack', function () {
    describe('#Stack.top', function () {
        it('should be return 4 when init with 4 element', function () {
            assert.equal(books.top, 4);
        });
    });
    describe('#Stack.length', function () {
        it('should be return 4 when init with 4 element', function () {
            assert.equal(books.length(), 4);
        });
    });
    describe('#Stack.peek', function () {
        before(function () {
            books.push('笑傲江湖');
        });
        
        it('should be return 笑傲江湖 when push 笑傲江湖 into books', function () {
            assert.equal(books.peek(), '笑傲江湖');
        });
        it('should be return 5 when push 笑傲江湖 into books', function () {
            assert.equal(books.top, 5);
        });
        it('should be return 3 when push 笑傲江湖 into books', function () {
            assert.equal(books.length(), 5);
        });
    });
    describe('#Stack.pop', function () {
        it('should be return 3 when pop 笑傲江湖 from books', function () {
            assert.equal(books.pop(), '笑傲江湖');
        });
        it('should be return 4 when pop 笑傲江湖 from books', function () {
            assert.equal(books.top, 4);
        });
        it('should be return 4 when pop 笑傲江湖 from books', function () {
            assert.equal(books.length(), 4);
        });
    });
    describe('#Stack.clear', function () {
        before(function () {
            books.clear()
        });

        it('should be return 0 when clear the books', function () {
            assert.equal(books.top, 0);
        });
    });
});