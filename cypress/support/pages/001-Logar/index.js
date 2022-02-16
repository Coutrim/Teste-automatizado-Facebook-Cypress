const el = require("./elements").ELEMENTS;
class Logar {
    urlValidacao200(response) {
        cy.request(response).then((response) => {
            expect(response.status).to.eq(200);
        });
    }
    logar() {
        cy.visit("")
        cy.get(el.botaoEntrar1).click()
        // nome
        cy.get(el.email).type('chicobatata2@gmail.com', { log: false })

        // senha
        cy.get(el.senha).type('d3d3.dll', { log: false })

        // login
        cy.get(el.botaoEntrar2).click()

        // Validando se está logado
        cy.get(el.boxValidacao).contains("No que você está pensando?")

    }
}
export default new Logar();