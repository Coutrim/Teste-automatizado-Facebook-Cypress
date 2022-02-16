const el = require("./elements").ELEMENTS;
class Publicacao {
    urlValidacao200(response){
        cy.request(response).then((response) => {
            expect(response.status).to.eq(200);
            
        });
    }
    criarPublicacao(){
       const teste="Teste de automação com Cypress."
       cy.wait(500).xpath(el.criarPublicacao).click({force:true})
       cy.xpath(el.escreverPublic).click().type(teste)
       cy.contains("Publicar").click({force:true})
       cy.wait(500).get('body').contains("Sua publicação está publicada agora")
      

    }
    
}
export default new Publicacao();