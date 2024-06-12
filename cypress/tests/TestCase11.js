
import HeaderExercise from "../component/HeaderExercise";
import AutoExercise from "../component/AutoExercise";
import { Data } from "../untils/data";

describe('Verify Subscription in Cart pageyarn test Ex ', () => {
    let headerEx;
    let Exercise;
    let data;
    beforeEach(() => {
        cy.visit('/');
        headerEx = new HeaderExercise();
        Exercise = new AutoExercise();
        data = new Data();
    })

    it('should be able to Verify Subscription in Cart page ', () => {
        Exercise.getcheckAutomation().should('be.visible')
        headerEx.getCartBtn().first().click()
        Exercise.getCheckSubscription().should('be.visible')
        Exercise.getSubscribeEmail().type(data.email)
        Exercise.getSubscribeBtn().click()
        Exercise.getCheckSubscribeEmail().should('be.visible')

    });

})