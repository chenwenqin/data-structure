function List() {
    this.dataStore = [];
    this.size = 0;
    this.position = 0;
}

List.prototype = {
    clear: function () {
        delete this.dataStore;
        this.dataStore = [];
        this.size = 0;
        this.position = 0;
    },
    length: function () {
        return this.size;
    },
    toString: function () {
        return this.dataStore;
    },
    indexOf: function (element) {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (element === this.dataStore[i]) {
                return i;
            }
        }
        return -1;
    },
    append: function (element) {
        this.dataStore[this.size++] = element;
    },
    remove: function (element) {
        var index = this.indexOf(element);
        if (index > -1) {
            this.dataStore.splice(index, 1);
            --this.size;
            return true;
        }
        return false;
    },
    insert: function (element, afterElement) {
        this.dataStore.splice(position, 0, element);
        ++this.size;
    },
    contains: function (element) {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore === element) {
                return true;
            }
        }
        return false;
    },
    front: function () {
        this.position = 0;
    },
    end: function () {
        this.position = this.size - 1;
    },
    prev: function () {
        if (this.position > 0) {
            --this.position;
        }
    },
    next: function () {
        if (this.position < this.size - 1) {
            ++this.position;
        }
    },
    curPosition: function () {
        return this.position;
    },
    moveTo: function (position) {
        this.position = position;
    },
    getElement: function () {
        return this.dataStore[this.position];
    }
};

module.exports = List;