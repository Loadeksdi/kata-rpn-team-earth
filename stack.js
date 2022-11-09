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
            else{
                const result = this.evaluateExpression(element);
                this.stack.push(result);
            }
        });
    }
    isInt(token){
        return !parseInt(token) ? false : true;
    }
    evaluateExpression(operand){
        const val1 = this.pop();
        const val2 = this.pop();
        switch(operand){
            case "+":
                return val1 + val2;
        }
    }

}

module.exports = Stack;