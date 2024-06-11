
import HeaderExercise from "../component/HeaderExercise";
import AutoExercise from "../component/AutoExercise";
import { Data } from "../untils/data";

describe('Test Cases Page Ex ', () => {
    let headerEx;
    let Exercise;
    let data;
    beforeEach(() => {
        cy.visit('/');
        headerEx = new HeaderExercise();
        Exercise = new AutoExercise();
        data = new Data();
    })

    it('should be able to Verify Test Cases Page ', () => {
        Exercise.getcheckAutomation().should('be.visible')
        headerEx.getTestCaseBtn().click()   
        Exercise.getcheckTestCase().should('be.visible')  


    });

})