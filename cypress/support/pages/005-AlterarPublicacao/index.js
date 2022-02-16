const el = require("./elements").ELEMENTS;
class AlterarPublicacao {
    urlValidacao200(response) {
        cy.request(response).then((response) => {
            expect(response.status).to.eq(200);

        });
    }
    alterarPublicacao() {
        const teste = "Teste de automação com Cypress."
        cy.xpath(el.botaoPerfil).click({ force: true })
        cy.contains(teste).scrollIntoView()
        cy.get('body').contains(teste)
        cy.xpath(el.botaoPublicacao).click({ force: true })
        cy.xpath(el.botaoEditarPublicacao).click({force:true})
        cy.xpath(el.digitarTexto).type(" Editando publicação automatizada com Cypress.")
        cy.xpath(el.botaoSalvar).click({force:true})
        cy.get(el.EditarPerfil).click({force:true})
        cy.get(el.botaoCancelar).click({force:true})
        cy.get('body').contains(" Editando publicação automatizada com Cypress.")

    }

}
export default new AlterarPublicacao();