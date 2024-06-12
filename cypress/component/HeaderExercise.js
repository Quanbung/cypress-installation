export default class HeaderExercise {
    getSignUpLink = () => cy.contains('Signup / Login')
    getDeleteAccountBtn = () => cy.get('.fa.fa-trash-o')
    getTestCaseBtn = () => cy.contains('Test Cases')
    getProductBtn = () => cy.get('.material-icons.card_travel')
    getCartBtn = () => cy.get('.fa.fa-shopping-cart')
}