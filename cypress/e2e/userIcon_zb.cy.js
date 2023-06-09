/// <reference types="cypress"/>

describe('Header | User icon', () => {
    
    const expectedDropDownMenuItems = [
        'Builds',
        'Configure',
        'My Views',
        'Credentials',
    ]

    it('AT_01.03_013| <Header> Verify "User Icon" is visible and clickable', () => {
        cy.get('.login > a.model-link').should('exist').click()
        cy.get('#main-panel h1').should('contain', 'admin')
    })

    it('AT_01.03_014| <Header> Verify dropdown menu from "User Icon"', () => {
        cy.get('.login > a.model-link > button').click({ force: true })
        cy.get('#breadcrumb-menu ul>li span')
            .should("have.length", 4).then(($elems) => {
                const element = Cypress.$.makeArray($elems).filter($elem => $elem.innerText == 'Builds')
                return cy.wrap(element)
            }).click()
        cy.get('#breadcrumbBar>ol>li:last-child').should('have.text', 'Builds')
    })

    it('AT_01.03_015| <Header> Verify User Icon is visible and clickable', () => {
        cy.get('.model-link span[class="hidden-xs hidden-sm"]').should('exist').click()
        cy.get('.icon-lg').should('exist')
    })

    it('AT_01.03_017 | <Header>| User icon | Verify contents of the drop-down menu', () => {
        cy.get('.jenkins-menu-dropdown-chevron:nth-child(3)').click({ force: true });
        cy.get('#breadcrumb-menu ul>li span').should('have.length', 4).each(($el, idx) => {
            expect($el.text()).to.be.equal(expectedDropDownMenuItems[idx]);
        })
    })
})


