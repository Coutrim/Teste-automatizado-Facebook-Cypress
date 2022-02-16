const el = require("./elements").ELEMENTS;
class VisualizacaoPublicacao {
    urlValidacao200(response){
        cy.request(response).then((response) => {
            expect(response.status).to.eq(200);
            
        });
    }
    verPublicacao(){
       const teste="Teste de automação com Cypress."
       cy.xpath(el.botaoPerfil).click({force:true})
       cy.contains(teste).scrollIntoView()
       cy.get('body').contains(teste)
 
    }
    
}
export default new VisualizacaoPublicacao();