const el = require("./elements").ELEMENTS;
class Deslogar {
    urlValidacao200(response) {
        cy.request(response).then((response) => {
            expect(response.status).to.eq(200);

        });
    }
    deslogar() {
        cy.wait(1000).xpath(el.botaoConfiguracoes).click({ force: true })
        cy.contains('Sair').click()
        cy.contains('Salvar e sair').click()
        cy.get('body').contains("Entrar em outra conta")
    }
}
export default new Deslogar();