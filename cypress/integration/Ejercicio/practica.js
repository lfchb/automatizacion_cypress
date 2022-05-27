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
    it.skip('Agregar dos productos al carrito', function(){
        //Obtenemos la lista de productos
        cy.get(':nth-child(2) > :nth-child(1) > #inventory_container').as('Productos')
        
        //Iteramos la lista de productos
        cy.get('@Productos')
        .find('.inventory_item_name')
        .each(($el,index,$list) => {
            //Mostramos los productos encontrados
            //cy.log('Se ha encontrado el elemento buscado: '+ index)
            
            //Seleccionados 2 productos:
            if(index<=1){
                cy.get('@Productos').contains('Add to cart').click()
            }
        })
    });

    //Caso de prueba 3: Visualizar el carrito
    it.skip('Agregar dos productos al carrito y visualizar el carrito', function(){
        //Obtenemos la lista de productos
        cy.get(':nth-child(2) > :nth-child(1) > #inventory_container').as('Productos')
        
        //Iteramos la lista de productos
        cy.get('@Productos')
        .find('.inventory_item_name')
        .each(($el,index,$list) => {
            //Mostramos los productos encontrados
            //cy.log('Se ha encontrado el elemento buscado: '+ index)
            
            //Seleccionados 2 productos:
            if(index<=1){
                cy.get('@Productos').contains('Add to cart').click()
            }
        })

        cy.get('.shopping_cart_link').click()
    });

    //Caso de prueba 4: Completamos la información de despacho
    it('Agregar dos productos al carrito, visualizamos el carrito y completamos informacion de despacho', function(){
        //Obtenemos la lista de productos
        cy.get(':nth-child(2) > :nth-child(1) > #inventory_container').as('Productos')
        
        //Iteramos la lista de productos
        cy.get('@Productos')
        .find('.inventory_item_name')
        .each(($el,index,$list) => {
            //Mostramos los productos encontrados
            //cy.log('Se ha encontrado el elemento buscado: '+ index)
            
            //Seleccionados 2 productos:
            if(index<=1){
                cy.get('@Productos').contains('Add to cart').click()
            }
        })

        //Visualizar el carrito de compras
        cy.get('.shopping_cart_link').click()
        //
        cy.get('[data-test="checkout"]').click()
        //Completar la información de despacho
        cy.get('[data-test="firstName"]').type('Liliana')
        cy.get('[data-test="lastName"]').type('Chacha')
        cy.get('[data-test="postalCode"]').type('170502')
    });
}
)