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
});