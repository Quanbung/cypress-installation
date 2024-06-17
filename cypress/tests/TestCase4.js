
import HeaderExercise from "../component/HeaderExercise";
import AutoExercise from "../component/AutoExercise";
import { Data } from "../untils/data";

describe('login Ex Logout User ', () => {
    let headerEx;
    let Exercise;
    let data;
    beforeEach(() => {
        cy.visit('/');
        headerEx = new HeaderExercise();
        Exercise = new AutoExercise();
        data = new Data();
    })

    it('should be able to Logout User ', () => {
        headerEx.getSignUpLink().click()
        Exercise.getName().type(data.username)
        Exercise.getEmail().type(data.email)
        Exercise.getSignUpBtn().click()
        Exercise.getTitle().click()
        Exercise.getPassword().type(data.password)
        Exercise.getCheckBox().click()
        Exercise.getCheckBox1().click()
        Exercise.getFirstName().type(data.first_name)
        Exercise.getLastName().type(data.last_name)
        Exercise.getAddress().type(data.address1)
        Exercise.getCountry().select(data.country)
        Exercise.getState().type(data.state)
        Exercise.getCity().type(data.city)
        Exercise.getZipcode().type(data.zipcode)
        Exercise.getMobileNumber().type(data.mobile_number)
        Exercise.getCreatetBtn().click()
        Exercise.getContinueBtn().click()
        Exercise.getLogout().click()
        //
        //test case 4
        // Exercise.getcheckAutomation().should('be.visible')
        headerEx.getSignUpLink().click()   
        Exercise.getcheckLogin().should('be.visible')  
        Exercise.getLoginEmail().type(data.email)
        Exercise.getLoginPassword().type(data.password)
        Exercise.getLoginBtn().click()
        Exercise.getcheckLogged().should('be.visible')
        Exercise.getLogout().click()
        Exercise.getcheckLogin().should('be.visible') 
    });

})