describe('MEAN STACK Products-App', ()=>{
  beforeEach(() => {
    cy.visit('https://app-mean-crud.vercel.app/');
  })
  it('Check if the frontend can be opened',()=>{
    cy.contains('PRODUCTS');
  })

  it('Check if render List of products',()=>{
    cy.contains('Product');
    cy.contains('Category');
    cy.contains('Location');
    cy.contains('Price');
  })

  it('Checking if contains the correct inputs and if apply danger-class to required',()=>{
    cy.get('.btn').click();
    cy.contains('CREATE PRODUCT');
    cy.get(':nth-child(1) > .form-control').click();
    cy.get(':nth-child(2) > .form-control').click();
    cy.get(':nth-child(3) > .form-control').click();
    cy.get(':nth-child(4) > .form-control').click();
    cy.get(':nth-child(1) > .form-control').click();
    cy.get(':nth-child(1) > .text-danger > span');
    cy.get(':nth-child(2) > .text-danger > span');
    cy.get(':nth-child(3) > .text-danger > span');
    cy.get(':nth-child(4) > .text-danger > span');
  })
})

describe('Create a New Product',()=>{
  beforeEach(() => {
    cy.visit('https://app-mean-crud.vercel.app/');
  })
  it('Check if the new product is created',()=>{
    cy.get('.btn').click();
    cy.contains('CREATE PRODUCT');
    cy.get('input:first').type('Monitor "55"')
    cy.get(':nth-child(2) > .form-control').type('Electronics')
    cy.get(':nth-child(3) > .form-control').type('Palma de Mallorca')
    cy.get(':nth-child(4) > .form-control').type('155')
    cy.get('.btn-success').click()
    cy.contains('The Product was created!');
  })
})

describe('Edit Product',()=>{
  beforeEach(() => {
    cy.visit('https://app-mean-crud.vercel.app/');
  })
  it('select the last item and edit it',()=>{
    cy.get(':nth-child(4) > :nth-child(5) > .fa-solid').click();
    cy.contains('EDIT PRODUCT');
    cy.get('input:first').click().clear().type('Monitor "35"');
    cy.get(':nth-child(2) > .form-control').clear().type('Electronics');
    cy.get(':nth-child(3) > .form-control').clear().type('Barcelona');
    cy.get(':nth-child(4) > .form-control').clear().type('95');
    cy.get('.btn-success').click();
    cy.contains('The Product was edited ok!');
  })
})

describe('Delete Product',()=>{
  beforeEach(() => {
    cy.visit('https://app-mean-crud.vercel.app/');
  })
  it('select the last item and delete it',()=>{
    cy.get('em').last().click();
    cy.contains('The product was deleted');
  })
})
