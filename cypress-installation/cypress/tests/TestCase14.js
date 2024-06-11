
import HeaderExercise from "../component/HeaderExercise";
import AutoExercise from "../component/AutoExercise";
import { Data } from "../untils/data";

describe('Place Order: Register while Checkout ', () => {
    let headerEx;
    let Exercise;
    let data;
    beforeEach(() => {
        cy.visit('/');
        headerEx = new HeaderExercise();
        Exercise = new AutoExercise();
        data = new Data();
    })

    it('should be able to Place Order: Register while Checkout', () => {
        Exercise.getcheckAutomation().should('be.visible')
        Exercise.getAddToCartBtn().eq(1).click() 
        Exercise.getContinueShopBtn().click() 
        Exercise.getViewCart().click({force: true}) 
        Exercise.getCheckProductDetail1().should('be.visible')
        Exercise.getProceedCheckout().click() 
        Exercise.getRegisterLogin().eq(1).click() 
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
        Exercise.getViewCart().click({force: true}) 
        Exercise.getProceedCheckout().click() 
        Exercise.getCheckAddressDetail().should('be.visible')
        Exercise.getCheckReview().should('be.visible')
        Exercise.getText().type(data.text)
        Exercise.getplaceOrder().click() 
        Exercise.getNameOnCard().type(data.username)
        Exercise.getCardNumber().type(data.mobile_number)
        Exercise.getCVC().type(data.cvc)
        Exercise.getExpiration().type(data.expriation)
        Exercise.getY().type(data.year)
        Exercise.getPayOrder().click() 
        // Exercise.getCheckVerifySuccess().should('be.visible')
        headerEx.getDeleteAccountBtn().click()
        Exercise.getcheckDelete().should('be.visible')
    });

})