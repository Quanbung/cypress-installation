
import HeaderExercise from "../component/HeaderExercise";
import AutoExercise from "../component/AutoExercise";
import { Data } from "../untils/data";

describe('Add Products In Cart ', () => {
    let headerEx;
    let Exercise;
    let data;
    beforeEach(() => {
        cy.visit('/');
        headerEx = new HeaderExercise();
        Exercise = new AutoExercise();
        data = new Data();
    })

    it('should be able to Add Products In Cart', () => {
        Exercise.getcheckAutomation().should('be.visible')
        headerEx.getProductBtn().click()    
        Exercise.getAddToCartBtn().eq(1).click() 
        Exercise.getContinueShopBtn().click() 
        Exercise.getAddToCart2Btn().eq(1).click({force: true}) 
        Exercise.getContinueShopBtn().click() 
        Exercise.getViewCart().click({force: true}) 
        Exercise.getCheckPrice().should('be.visible')
        Exercise.getcheckQuantity().should('be.visible')
        Exercise.getCheckTotal().should('be.visible')
    });

})