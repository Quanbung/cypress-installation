
import HeaderExercise from "../component/HeaderExercise";
import AutoExercise from "../component/AutoExercise";
import { Data } from "../untils/data";


describe('sign up Ex ', () => {
    let headerEx;
    let Exercise;
    let data;
    beforeEach(() => {
        cy.visit('/');
        headerEx = new HeaderExercise();
        Exercise = new AutoExercise();
        data = new Data();
    })

    it('should be able to signup ', () => {
     
        Exercise.getcheckAutomation().should('be.visible')
        headerEx.getSignUpLink().click()
        Exercise.getcheckNewUser().should('be.visible')
        Exercise.getName().type(data.username)
        Exercise.getEmail().type(data.email)
        Exercise.getSignUpBtn().click()
        Exercise.getcheckEnterAccount().should('be.visible')
        Exercise.getTitle().click()
        Exercise.getPassword().type(data.password)
        Exercise.getDay().select(data.day)
        Exercise.getMonth().select(data.month)
        Exercise.getYear().select(data.year)
        Exercise.getCheckBox().click()
        Exercise.getCheckBox1().click()
        Exercise.getFirstName().type(data.first_name)
        Exercise.getLastName().type(data.last_name)
        Exercise.getCompany().type(data.company)
        Exercise.getAddress().type(data.address1)
        Exercise.getAddress2().type(data.address2)
        Exercise.getCountry().select(data.country)
        Exercise.getState().type(data.state)
        Exercise.getCity().type(data.city)
        Exercise.getZipcode().type(data.zipcode)
        Exercise.getMobileNumber().type(data.mobile_number)
        Exercise.getCreatetBtn().click()
        Exercise.getcheckAccount().should('be.visible')
        Exercise.getContinueBtn().click()
        Exercise.getcheckLogged().should('be.visible')
        headerEx.getDeleteAccountBtn().click()
        Exercise.getcheckDelete().should('be.visible')
        Exercise.getContinueDeBtn().click()

    });

})