import { describe, expect, test, beforeAll } from "bun:test";

beforeAll(() => {
    // setup tests
});

describe("math", () => {
    test("addition", () => {
        expect(2 + 2).toBe(4);
        expect(7 + 3).toMatchSnapshot();
    });

    test('test object snapshot', () => {
        const person = {
            name: 'Erika',
            age: 32
        }

        expect(person).toMatchSnapshot()
    });

    test('test object, expect data', () => {
        const person = {
            name: 'Erika',
            age: 32,
            id: 'uygtr5467gh'
        }

        expect(person).toEqual({
            name: 'Erika',
            age: 32,
            id: expect.any(String)
        });
    });
});
