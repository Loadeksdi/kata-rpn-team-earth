class Stack{
    constructor(){
        this.stack = [];
    }
    push(value){
        this.stack.push(value);
    }
    pop(){
        return this.stack.pop();
    }
    top(){
        return this.stack[this.stack.length-1];
    }
    size(){
        return this.stack.length;
    }
    pushString(string){
        const stringArray = string.split(" ");
        stringArray.forEach(element => {
            this.stack.push(element);
        });
    }
}

module.exports = Stack;