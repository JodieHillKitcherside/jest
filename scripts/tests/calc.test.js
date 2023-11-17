const addtion = require("../calc");

describe("Calculator", () => {
    describe("Addtion function"), () => {
        test("should return 42 for 20 + 22"), () => {
            expect(addtion(20,22)).toBe(42);
        }
        test("should return 73 for 20 + 22"), () => {
            expect(addtion(42,31)).toBe(73);
        }
    }
    describe("Subratraction function"), () => {
        
    }
    describe("Multiplication function"), () => {
        
    }
    describe("Division function"), () => {
        
    }
}