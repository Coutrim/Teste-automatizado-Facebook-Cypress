const el = require("./elements").ELEMENTS;
class ExcluirPublicacao {
    urlValidacao200(response) {
        cy.request(response).then((response) => {
            expect(response.status).to.eq(200);
        });
    }
    excluirPublicacao() {
        const teste = "Teste de automação com Cypress."
        cy.xpath(el.botaoPerfil).click({ force: true })
        cy.contains(teste).scrollIntoView()
        cy.xpath(el.botaoPublicacao).click({ force: true })
        cy.xpath(el.botaoExcluir).click({force:true})
        cy.get(el.botaoExcluir2).click({force:true})
       // cy.get('._5rgt > ._5msj').should('not.exist')
    }
}
export default new ExcluirPublicacao();