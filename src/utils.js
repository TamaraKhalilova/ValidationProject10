export const regexBuilder = (length) => {
    return new RegExp(
        `^(?=(?:\\S*?[A-Z]){1})(?=(?:\\S*?[a-z]){1})(?=(?:\\S*?\\d){1})(?=(?:\\S*?[!"#$%&'()*+,-./:;<=>?@\\[\\\\\\]^_\\{|}~]){1})\\S{0,${length}}$`
    );
};

export const testRegex = (maxLength) => {
    const testCases = [
        { input: "A", description: "Too short input", expected: false },
        { input: "Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!", description: "Too long input", expected: false },
        { input: "Aa1!Aa1!Aa1", description: "Matching input length", expected: true },
        { input: "aa1!", description: "Missing uppercase", expected: false },
        { input: "AA1!", description: "Missing lowercase", expected: false },
        { input: "AaA!", description: "Missing digit", expected: false },
        { input: "Aa1a", description: "Missing special character", expected: false },
        { input: " Aa1!", description: "Leading whitespace", expected: false },
        { input: "Aa1! ", description: "Trailing whitespace", expected: false },
        { input: "Aa 1!", description: "Whitespace in the middle", expected: false },
    ];

    testCases.forEach((testCase) => {
        const result = regexBuilder(maxLength).test(testCase.input);
        console.log(`Testing '${testCase.description}':`);
        console.log(`Expected: ${testCase.expected}, Got: ${result}`);
        console.assert(result === testCase.expected, `Failed on '${testCase.description}'`);
    });
};
