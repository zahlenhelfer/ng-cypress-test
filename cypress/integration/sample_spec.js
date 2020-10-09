describe("My first Test", () => {
  it('finds the content "type"', () => {
    cy.visit("http://localhost:4200");
    cy.contains("Run and Watch Tests").click();
  });
});
