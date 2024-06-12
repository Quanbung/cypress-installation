
import HeaderExercise from "../component/HeaderExercise";
import AutoExercise from "../component/AutoExercise";
import { Data } from "../untils/data";

describe('Verify Product quantity in Cart', () => {
    let headerEx;
    let Exercise;
    let data;
    beforeEach(() => {
        cy.visit('/');
        headerEx = new HeaderExercise();
        Exercise = new AutoExercise();
        data = new Data();
    })

    it('should be able to Verify Product quantity in Cart', () => {
        Exercise.getcheckAutomation().should('be.visible')
        Exercise.getViewProducttBtn().eq(1).click() 
        Exercise.getCheckProductDetail().should('be.visible')
        Exercise.getQuantity().first().clear().type('4')
        Exercise.getAddToCartBtn().eq(1).click() 
        Exercise.getViewCart().click()
        Exercise.getCheckProductDetail().should('be.visible')
        Exercise.getcheckQuantity().should('be.visible')
    });

})