describe("Login", () => {
  describe("when the user exists", () => {
    it("redirects to home page", () => {
      cy.visit("/login");

      cy.get(`[placeholder=Email`).type("felipe.brunetti@hotmail.com");

      cy.get(`[placeholder=Password`).type("senha123");

      cy.get("button").contains("Sign in").click();

      cy.get(`[placeholder=Email`).should("not.be.disabled");

      cy.url().should("eq", "http://localhost:3000/");
    });
  });

  describe("when the user does not exist", () => {
    it("shows an error message", () => {
      cy.visit("/login");

      cy.get("button").contains("Sign in").click();

      cy.get(".error-messages")
        .find("li")
        .contains("email or password: is invalid");
    });
  });
});
