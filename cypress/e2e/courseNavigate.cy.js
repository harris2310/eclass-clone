describe("navigate to a 1st term course", () => {
  it("navigate to a 1st term course", () => {
    cy.visit("/");
    cy.contains("Courses").click();
    cy.contains("Open").parent().parent().prev().prev().children("div").click();
  });
});
