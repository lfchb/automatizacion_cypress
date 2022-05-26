/// <reference types="Cypress"/>
//Suite de casos que contiene cada caso
describe('Conjunto de casos de prueba', function()
{

    //Caso de prueba 1
    it('Ingresar a la página principal de SWAGLABS', function(){
        //Paso 1
        //Paso 2
        //Paso 3
        cy.visit("https://www.saucedemo.com/")

        cy.get('input[name="user-name"]').should('have.value', 'standard_user')
    })

    //Caso de prueba 2


    //Caso de prueba 3
}
)