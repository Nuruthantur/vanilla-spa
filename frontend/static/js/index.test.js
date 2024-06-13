const { getParams } = require("./getParams");

describe("getParams function", () => {
  test("should return an empty object for a route without parameters", () => {
    const match = {
      result: ["/"],
    };
    expect(getParams(match)).toEqual({});
  });

  test("should return an object with the correct parameters for a route with parameters", () => {
    const match = {
      result: ["/posts/123"],
    };
    expect(getParams(match)).toEqual({ id: "123" });
  });

  test("should return an object with multiple parameters for a route with multiple parameters", () => {
    const match = {
      result: ["/posts/123/comments/456"],
    };
    expect(getParams(match)).toEqual({ id: "123", commentId: "456" });
  });

  test("should return an empty object if the result is null", () => {
    const match = {
      result: null,
    };
    expect(getParams(match)).toEqual({});
  });

  test("should throw an error if the route path does not contain any parameters", () => {
    const match = {
      result: ["/"],
      route: {
        path: "/",
      },
    };
    expect(() => getParams(match)).toThrow(
      "No parameters found in the route path"
    );
  });
});
