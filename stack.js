class Stack{
    constructor(){
        this.stack = [];
    }
    push(value){
        this.stack.push(value);
    }
    top(){
        return this.stack[this.stack.length-1];
    }
}

module.exports = Stack;