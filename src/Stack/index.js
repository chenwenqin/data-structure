function Stack() {
    this.dataStore = [];
    this.top = 0;
}

Stack.prototype = {
    push: function (element) {
        this.dataStore[this.top++] = element;
    },
    pop: function () {
        return this.dataStore[--this.top];
    },
    peek: function () {
        return this.dataStore[this.top - 1];
    },
    clear: function () {
        this.top = 0;
    },
    length: function () {
        return this.top;
    }
};

module.exports = Stack;