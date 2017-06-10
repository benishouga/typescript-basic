import * as assert from "assert";
import Hoge from "../src/Hoge";

describe("Hoge", () => {
  it("hello", () => {
    assert.equal(new Hoge("test").hello(), `test say "hello"`);
  });
});
