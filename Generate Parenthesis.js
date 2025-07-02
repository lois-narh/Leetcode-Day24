/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];

    function backtrack(s, openCount, closeCount) {
        // Base case: if string length is 2*n, add to result
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }

        // Add opening parenthesis if we haven't used all n
        if (openCount < n) {
            backtrack(s + '(', openCount + 1, closeCount);
        }

        // Add closing parenthesis if valid (more open than close)
        if (closeCount < openCount) {
            backtrack(s + ')', openCount, closeCount + 1);
        }
    }

    backtrack('', 0, 0);
    return result;
};