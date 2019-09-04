/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        let val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val)
        return val;
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    this.cache.delete(key)
    this.cache.set(key, value)

    if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value)
    }
};