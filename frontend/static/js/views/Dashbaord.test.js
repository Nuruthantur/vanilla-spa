import DashboardView from "./DashboardView.js"; // Assuming DashboardView.js is the file containing the code snippet

describe("DashboardView", () => {
  let dashboardView;

  beforeEach(() => {
    dashboardView = new DashboardView();
  });

  test("setTitle throws an error when an invalid title is passed", () => {
    const invalidTitles = [null, undefined, "", 123, true, {}];

    invalidTitles.forEach((invalidTitle) => {
      expect(() => {
        dashboardView.setTitle(invalidTitle);
      }).toThrowError("Invalid title. Title must be a non-empty string.");
    });
  });

  test("setTitle sets the title correctly when a valid title is passed", () => {
    const validTitle = "My Dashboard";
    dashboardView.setTitle(validTitle);
    expect(dashboardView.title).toBe(validTitle);
  });

  test("setTitle does not modify the title when the same valid title is passed", () => {
    const validTitle = "My Dashboard";
    dashboardView.setTitle(validTitle);
    dashboardView.setTitle(validTitle);
    expect(dashboardView.title).toBe(validTitle);
  });

  test("setTitle throws an error when the title is too long", () => {
    const tooLongTitle = "A".repeat(101); // Assuming the maximum title length is 100 characters
    expect(() => {
      dashboardView.setTitle(tooLongTitle);
    }).toThrowError(
      "Invalid title. Title must be a non-empty string and cannot exceed 100 characters."
    );
  });

  test("setTitle does not modify the title when the same too long title is passed", () => {
    const tooLongTitle = "A".repeat(101);
    dashboardView.setTitle(tooLongTitle);
    dashboardView.setTitle(tooLongTitle);
    expect(dashboardView.title).toBe(tooLongTitle);
  });
});
