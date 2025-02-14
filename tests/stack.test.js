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
        stack.push(null);
        stack.push(2);
        stack.push('hello');
        expect(stack.size()).toBe(3);
    });
    it('check that + is not an integer', () => {
        const stack = new Stack();
        expect(stack.isInt("+")).toBe(false);
    });
    it('add expression string 20 2 + and expect stack size not to be 3', () => {
        const stack = new Stack();
        stack.computeExpression("20 2 +");
        expect(stack.size()).not.toBe(3);
    });
    it('add expression string 20 2 + and expect result to be 22', () => {
        const stack = new Stack();
        stack.push(20);
        stack.push(2);
        expect(stack.evaluateExpression("+")).toBe(22);
    });
    it('add expression string 20 2 + and expect stack size be 1', () => {
        const stack = new Stack();
        stack.computeExpression("20 2 +");
        expect(stack.size()).toBe(1);
    });
    it('add expression string 20 2 + and expect stack top to be 22', () => {
        const stack = new Stack();
        stack.computeExpression("20 2 +");
        expect(stack.top()).toBe(22);
    });
    it('add expression string 20 2 - and expect result to be 18', () => {
        const stack = new Stack();
        stack.push(20);
        stack.push(2);
        expect(stack.evaluateExpression("-")).toBe(18);
    });
    it('add expression string 20 2 * and expect result to be 40', () => {
        const stack = new Stack();
        stack.push(20);
        stack.push(2);
        expect(stack.evaluateExpression("*")).toBe(40);
    });
    it('add expression string 20 2 / and expect result to be 10', () => {
        const stack = new Stack();
        stack.push(20);
        stack.push(2);
        expect(stack.evaluateExpression("/")).toBe(10);
    });
    it('add expression string 21 2 / and expect result to be 10', () => {
        const stack = new Stack();
        stack.computeExpression("21 2 /");
        expect(stack.top()).toBe(10);
    });
    it('add expression string 20 2 / 5 + 3 - 6 * and expect stack size to be 1', () => {
        const stack = new Stack();
        stack.computeExpression("20 2 / 5 + 3 - 6 *");
        expect(stack.top()).toBe(72);
    });
    it('add expression string 9 sqrt and expect result to be 3', () => {
        const stack = new Stack();
        stack.computeExpression("9 sqrt");
        expect(stack.top()).toBe(3);
    });
    it('add expression string 8 4 2 3 max and expect result to be 8', () => {
        const stack = new Stack();
        stack.computeExpression("8 4 2 3 max");
        expect(stack.top()).toBe(8);
    });
});