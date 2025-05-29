import { test, expect} from  "@playwright/test";
import { youCanVotes } from "./youCanVotes.js";

test('user 17 years old, his cant vote', () => {
    const result = youCanVotes(17);
    expect(result).toBe("Ви ще не можете голосувати");
});

test('user 18 year old,his can vote', () => {
    const result = youCanVotes(18);
    expect(result).toContainEqual("Ви можете голосувати");
});

test('users 25 years old,his can vote', () => {
    const result = youCanVotes(25);
    expect(result).toBe('Ви можете голосувати');
});

test('error,please enter a number', () => {
    expect(() => vote('вісімнадцять')).toThrow('Please enter youre age!');
});