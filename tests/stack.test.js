const Stack = require("../stack");

describe('Stack', () => {
    it('should create an empty stack', () => {
        const stack = new Stack();
        expect(stack).toBeInstanceOf(Stack);
    });
    it('add 20 to stack', () => {
        const stack = new Stack();
        stack.push(20);
        expect(stack.top()).toBe(20);
    });
    it('remove 20 from stack', () => {
        const stack = new Stack();
        stack.push(20);
        stack.pop();
        expect(stack.size()).toBe(0);
    });
    it('add 3 elements and expect stack size to be 3', () => {
        const stack = new Stack();
        stack.push(20);
        stack.push(2);
        stack.push('+');
        expect(stack.size()).toBe(3);
    });
    it('add expression string 20 2 + and expect stack size to be 3', () => {
        const stack = new Stack();
        stack.pushString("20 2 +");
        expect(stack.size()).toBe(3);
    });
});