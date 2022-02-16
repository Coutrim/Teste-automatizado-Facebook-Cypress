/// <reference types="cypress"/>
var Chance = require("chance");
var chance = new Chance();
require("cypress-xpath");
import Logar from "../support/pages/001-Logar"
import Deslogar from "../support/pages/002-Deslogar"
import Publicacao from "../support/pages/003-Publicacao"
import VisualizacaoPublicacao from "../support/pages/004-VisualizacaoPublicacao"
import AlterarPublicacao from "../support/pages/005-AlterarPublicacao"
import ExcluirPublicacao from "../support/pages/006-ExcluirPublicacao"



describe("Facebook", () => {
    beforeEach(() => {
        Logar.logar()
    })
    it.only("001-Logar", () => {
        //  Logar.logar()     
    })
    it.only("002-Deslogar", () => {
        //  Deslogar.deslogar()     
    })
    it.only("003-Publicacao", () => {
        Publicacao.criarPublicacao()

    })
    it.only("004-VisualizacaoPublicacao", () => {
        VisualizacaoPublicacao.verPublicacao()
    })
    it.only("005-AlterarPublicacao", () => {
        AlterarPublicacao.alterarPublicacao()
    })
    it.only("006-ExcluirPublicacao", () => {
        ExcluirPublicacao.excluirPublicacao()
    })

    afterEach(() => {
        Deslogar.deslogar()
    })

})