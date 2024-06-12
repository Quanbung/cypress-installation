
import HeaderExercise from "../component/HeaderExercise";
import AutoExercise from "../component/AutoExercise";
import { Data } from "../untils/data";

describe('Search Product Ex ', () => {
    let headerEx;
    let Exercise;
    let data;
    beforeEach(() => {
        cy.visit('/');
        headerEx = new HeaderExercise();
        Exercise = new AutoExercise();
        data = new Data();
    })

    it('should be able to Search Product', () => {
        Exercise.getcheckAutomation().should('be.visible')
        headerEx.getProductBtn().click()   
        Exercise.getCheckProduct().should('be.visible')  
        Exercise.getSearch().type(data.search)
        Exercise.getSearchBtn().click() 
        Exercise.getCheckSearch().should('be.visible') 
        Exercise.getCheckSp().should('be.visible') 
    
    });

})