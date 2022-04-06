const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns 'Yes' when passed True, 'No' when passed False", () => {
  expect(booleanToWord(true)).toBe('Yes')
  expect(booleanToWord(false)).toBe('No')
  })
});
