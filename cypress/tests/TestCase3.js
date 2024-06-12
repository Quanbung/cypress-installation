
import HeaderExercise from "../component/HeaderExercise";
import AutoExercise from "../component/AutoExercise";
import { Data } from "../untils/data";

describe('Login User with incorrect email and password ', () => {
    let headerEx;
    let Exercise;
    let data;
    beforeEach(() => {
        cy.visit('/');
        headerEx = new HeaderExercise();
        Exercise = new AutoExercise();
        data = new Data();
    })

    it('should be able to Login User with incorrect email and password ', () => {
        Exercise.getcheckAutomation().should('be.visible')
        headerEx.getSignUpLink().click()   
        Exercise.getcheckLogin().should('be.visible')  
        Exercise.getLoginEmail().type(data.email)
        Exercise.getLoginPassword().type(data.password)
        Exercise.getLoginBtn().click()
        Exercise.getcheckLoginFail().should('be.visible')

    });

})