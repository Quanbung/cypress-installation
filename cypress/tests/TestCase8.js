
import HeaderExercise from "../component/HeaderExercise";
import AutoExercise from "../component/AutoExercise";
import { Data } from "../untils/data";

describe('Verify All Products and product detail page Ex ', () => {
    let headerEx;
    let Exercise;
    let data;
    beforeEach(() => {
        cy.visit('/');
        headerEx = new HeaderExercise();
        Exercise = new AutoExercise();
        data = new Data();
    })

    it('should be able to Verify All Products and product detail page ', () => {
        Exercise.getcheckAutomation().should('be.visible')
        headerEx.getProductBtn().click()   
        Exercise.getCheckProduct().should('be.visible')  
        Exercise.getFirstProduct().first().click() 
        Exercise.getcheckNameDetail().should('be.visible') 
        Exercise.getcheckCategoryDetail().should('be.visible') 
        Exercise.getcheckPriceDetail().should('be.visible') 
        Exercise.getcheckAvailabilityDetail().should('be.visible') 

    });

})