/* Imagine a (literal) stack of plates. If the stack gets too high, it might topple. 
Therefore, in real life, we would likely start a new stack when the previous stack exceeds some 
threshold. Implement a data structure SetOfStacks that mimics this. SetO-fStacks should be 
composed of several stacks and should create a new stack once the previous one exceeds capacity. 
SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack 
(that is, pop () should return the same values as it would if there were just a single stack). 
FOLLOW UP 
Implement a function popAt ( int index) which performs a pop operation on a specific sub-stack.  */

var DinnerPlates = function(capacity) {
    this.stacks = [[]];
    this.capacity = capacity;
    this.left = 0;
    this.right = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function(val) {
    while (this.stacks[this.left] && this.stacks[this.left].length === this.capacity) {
        this.left++;
    }
    if (!this.stacks[this.left]) {
        this.stacks[this.left] = [];
    }
    this.stacks[this.left].push(val);
    this.right = Math.max(this.right, this.left);
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function() {
    while (this.right >= 0 && this.stacks[this.right].length === 0) {
        this.right--;
    }
    if (this.right < 0) {
        return -1;
    }
    return this.popAtStack(this.right);
};

/** 
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function(index) {
    if (index < 0 || !this.stacks[index] || this.stacks[index].length === 0) {
        return -1;
    }
    const output = this.stacks[index].pop();
    this.left = Math.min(this.left, index);
    return output;
};