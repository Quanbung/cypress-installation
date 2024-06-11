
import HeaderExercise from "../component/HeaderExercise";
import AutoExercise from "../component/AutoExercise";
import { Data } from "../untils/data";

describe('Verify Subscription in home page Ex ', () => {
    let headerEx;
    let Exercise;
    let data;
    beforeEach(() => {
        cy.visit('/');
        headerEx = new HeaderExercise();
        Exercise = new AutoExercise();
        data = new Data();
    })

    it('should be able to Verify Subscription in home page', () => {
        Exercise.getcheckAutomation().should('be.visible')
        Exercise.getdown()  
        Exercise.getCheckSubscription().should('be.visible')
        Exercise.getSubscribeEmail().type(data.email)
        Exercise.getSubscribeBtn().click()
        Exercise.getCheckSubscribeEmail().should('be.visible')
    });

})