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
    isEmpty(){
        return this.stack.length === 0;
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
        switch (operand){
            case "sqrt":
                return Math.sqrt(this.pop());
            case "max":
                const arr = [];
                while(!this.isEmpty()){
                   arr.push(this.pop());
                }
                return Math.max(...arr);
            default: {
                const val1 = parseInt(this.pop());
                const val2 = parseInt(this.pop());
                switch(operand){
                    case "+":
                        return val2 + val1;
                    case "-":
                        return val2 - val1;
                    case "*":
                        return val2 * val1;
                    case "/":
                        return Math.floor(val2 / val1);
                }
            }
        }
    }

}

module.exports = Stack;