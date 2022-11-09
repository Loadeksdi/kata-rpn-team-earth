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
    it('add 20 2 + and expect stack size to be 3', () => {
        const stack = new Stack();
        stack.push(20);
        stack.push(2);
        stack.push('+');
        expect(stack.size()).toBe(3);
    })
});