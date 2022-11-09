const Stack = require("../stack");

describe('Stack', () => {
    it('should create an empty stack', () => {
        const stack = new Stack();
        expect(stack).toBeInstanceOf(Stack);
    });
});