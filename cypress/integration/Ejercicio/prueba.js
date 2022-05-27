/// <reference types="Cypress"/>
//Suite de casos que contiene cada caso
describe('Conjunto de casos de prueba', function()
{
    beforeEach(()=>{
        //Ingresamos a la página
        cy.visit("http://automationpractice.com/index.php")
        //cy.visit("https://www.saucedemo.com/")
    })

    //Caso de prueba 1
    it('Ingresar a la página principal de SWAGLABS', function(){
        //Verificar la cantidad de elementos visibles
        cy.get('#homefeatured .product-container ').should('have.length',7)
        //Obtener el elemento homefeature
        cy.get('#homefeatured .product-container').as('ProductosPopulares')
        //Obtener por parametro
        cy.get('@ProductosPopulares').should('have.length',7)
    })

    //Caso de prueba 2
    it('Agregar el elemento de tipo "blouse" al carro de compra desde la página principal', function(){
        //Obtener el elemento homefeature
        cy.get('#homefeatured .product-container').as('ProductosPopulares')
        //Iteramos para encontrar un producto con nombre X
        cy.get('@ProductosPopulares')
        .find('.product-name')
        .each(($el,index,$list) => {


            if($el.attr('title')==='Printed Dress'){
                cy.log('Se ha encontrado el elemento buscado')
                cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
            }
        })
    })


    //Caso de prueba 3
}
)