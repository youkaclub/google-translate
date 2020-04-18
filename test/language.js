const gt = require("../src");

describe("language", () => {
  it("should return the right language", async () => {
    const text = "hello world";
    const language = await gt.language(text);
    expect(language).toBe("en");
  });
});
