/// <reference types="Cypress"/>
//Suite de casos que contiene cada caso
describe('Conjunto de casos de prueba', function()
{
    beforeEach(()=>{
        //Ingresar a la página principal de SWAGLABS
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()   
    })

    //Caso de prueba 1: Login exitoso
    it.skip('Login exitoso', function(){
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()        
    });

    //Caso de prueba 2: Agregar dos productos al carrito
    it('Agregar dos productos al carrito', function(){
        //Obtener la lista de productos
        //cy.get('.inventory_list > :nth-child(1)').as('Productos')

        cy.get(':nth-child(2) > :nth-child(1) > #inventory_container').as('Productos')

    
        
        //Iteramos la lista de productos
        cy.get('@Productos')
        .find('.inventory_item_name')
        .each(($el,index,$list) => {
            //cy.log('Se ha encontrado el elemento buscado: '+$el.wrap.name)
            //cy.get('@Productos').eq(0).contains('Add to cart').click()
            //cy.get('@Productos').eq(1).contains('Add to cart').click()
            //cy.log('Se ha encontrado el elemento buscado: '+index)

            //if(index===1){
                cy.get('@Productos').eq(index).contains('Add to cart').click()
            //}
        })
        
    });
}
)