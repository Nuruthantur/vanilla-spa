// const sum = require("./Dashboard.js");
import { sum } from "./Dashboard.js";

console.log(sum(1, 2));

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
