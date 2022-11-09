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
    computeExpression(string){
        const stringArray = string.split(" ");
        stringArray.forEach(element => {
            if (this.isInt(element)){
                this.stack.push(element);
            }  
        });
    }
    isInt(token){
        return !parseInt(token) ? false : true;
    }
}

module.exports = Stack;