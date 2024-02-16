/* Implement a MyQueue class which implements a queue using two stacks.  */

var MyQueue = function() {
    this.stackNewest = [];
    this.stackOldest = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackNewest.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    reversal(this.stackNewest, this.stackOldest);
    return this.stackOldest.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    reversal(this.stackNewest, this.stackOldest);
    return this.stackOldest[this.stackOldest.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.stackNewest == false && this.stackOldest == false) {
        return true
    }
    return false
};

function reversal(stack1, stack2) {
    if (stack2.length === 0) {
        while(stack1.length !== 0) {
            stack2.push(stack1.pop());
        }
    }
}