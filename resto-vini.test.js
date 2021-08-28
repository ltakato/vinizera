const {restoVini} = require("./resto-vini");

describe("Resto - Vinizera", () => {
  it("Não deve possibilitar sacar quando tenta sacar 30 reais com notas de 20", () => {
    const ehPossivel = restoVini(30, 20);

    expect(ehPossivel).toBe(false)
  })
})