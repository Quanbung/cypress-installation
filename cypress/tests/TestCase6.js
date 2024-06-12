
import HeaderExercise from "../component/HeaderExercise";
import AutoExercise from "../component/AutoExercise";
import { Data } from "../untils/data";

describe('Contact Us Form Ex ', () => {
    let headerEx;
    let Exercise;
    let data;
    beforeEach(() => {
        cy.visit('/');
        headerEx = new HeaderExercise();
        Exercise = new AutoExercise();
        data = new Data();
    })

    it('should be able to Contact Us Form ', () => {
        Exercise.getcheckAutomation().should('be.visible')
        Exercise.getContactBtn().click()   
        Exercise.getcheckContact().should('be.visible')  
        Exercise.getNameContact().type(data.username)
        Exercise.getEmailContact().type(data.email)
        Exercise.getSubject().type(data.subject)
        Exercise.getMessage().type(data.Message)
        Exercise.getFileBtn().attachFile('Btvn.docx')
        Exercise.getSubmit().click() 
        Exercise.getcheckSubSuccess().should('be.visible') 
        Exercise.getHomeBtn().click() 
        Exercise.getcheckAutomation().should('be.visible')

    });

})