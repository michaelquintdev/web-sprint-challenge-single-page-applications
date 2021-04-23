describe("Pizza App", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/pizza')
    })
})

const nameInput = () => cy.get('input[name="name"]');

it("sanity test to make sure tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
});

it("Can type in the inputs", () => {
    // grab the inputs
    // assert that they are empty
    // type in them
    // assert that the thing we typed is there
    nameInput()
      .should("have.value", "")
      .type("asdfasdf")
      .should("have.value", "asdfasdf");
  });