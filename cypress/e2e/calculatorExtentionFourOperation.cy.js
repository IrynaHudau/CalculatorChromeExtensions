describe('Operation Addeding with positive numbers', () => {
    it('Should visit', () => {
        cy.visit('http://127.0.0.1:5500/CalculatorChrom/index.html')
    })
    it('Click on add button #1', () => {
        cy.get('[id=btn-sum]').click()
        cy.get('[id=btn-sum]').should('be.disabled')
        //cy.get('[id=btn-sum]').should('be.colored', '#e07a5f')
        cy.get('[id=btn-eql]').click()
        cy.get('[id=btn-sum]').should('not.be.disabled')
        //cy.get('[id=btn-sum]').should('be.colored', '#f2cc8f')
    })
    it('Click on add button #2', () => {
        cy.get('[id=btn-sum]').click()
        cy.get('[id=btn-sum]').should('be.disabled')
        //cy.get('[id=btn-sum]').should('be.colored', '#e07a5f')
        cy.get('[id=btn-clr]').click()
        cy.get('[id=btn-sum]').should('not.be.disabled')
       // cy.get('[id=btn-sum]').should('be.colored', '#f2cc8f')
    })

    it('Zero add 2',() =>{
        cy.get('[id=btn-sum]').click()
        cy.get('[id=btn2]').click()
        cy.get('[id=btn-eql]').click()
        cy.get('[id=result]').should('contain', '2')
        cy.get('[id=btn-clr]').click()
    })

    it('15 add 7',() =>{
        cy.get('[id=btn1]').click()
        cy.get('[id=btn5]').click()
        cy.get('[id=btn-sum]').click()
        cy.get('[id=btn7]').click()
        cy.get('[id=btn-eql]').click()
        cy.get('[id=result]').should('contain', '22')
        cy.get('[id=btn-clr]').click()
    })

    it('12,610 add 3,678',() =>{
        cy.get('[id=btn1]').click()
        cy.get('[id=btn2]').click()
        cy.get('[id=btn6]').click()
        cy.get('[id=btn1]').click()
        cy.get('[id=btn0]').click()
        cy.get('[id=btn-sum]').click()
        cy.get('[id=btn3]').click()
        cy.get('[id=btn6]').click()
        cy.get('[id=btn7]').click()
        cy.get('[id=btn8]').click()
        cy.get('[id=btn-eql]').click()
        cy.get('[id=result]').should('contain', '16,288')
    })

    it('16,288 add 895,478',() =>{
        cy.get('[id=btn-sum]').click()
        cy.get('[id=btn8]').click()
        cy.get('[id=btn9]').click()
        cy.get('[id=btn5]').click()
        cy.get('[id=btn4]').click()
        cy.get('[id=btn7]').click()
        cy.get('[id=btn8]').click()
        cy.get('[id=btn-eql]').click()
        cy.get('[id=result]').should('contain', '911,766')
        cy.get('[id=btn-clr]').click()
    })

    it('BigNumber, 999,999,999,999 add 999,999,222',() =>{
        for(let i = 0; i < 12; i++){
            cy.get('[id=btn9]').click()
        }
        cy.get('[id=btn-sum]').click()
        for(let i = 0; i < 6; i++){
            cy.get('[id=btn9]').click()
        }
        cy.get('[id=btn2]').click()
        cy.get('[id=btn2]').click()
        cy.get('[id=btn2]').click()
        cy.get('[id=btn-eql]').click()
        cy.get('[id=result]').should('contain', '1,000,999,999,221')
        cy.get('[id=btn-clr]').click()
    })

    it('LongNumber 999,999,999,999,999 add 999,999,222',() =>{
        for(let i = 0; i < 15; i++){
            cy.get('[id=btn9]').click()
        }
        cy.get('[id=btn-sum]').click()
        for(let i = 0; i < 6; i++){
            cy.get('[id=btn9]').click()
        }
        cy.get('[id=btn2]').click()
        cy.get('[id=btn2]').click()
        cy.get('[id=btn2]').click()
        cy.get('[id=btn-eql]').click()
        cy.get('[id=result]').should('contain', '1.000001e+15')
        cy.get('[id=btn-clr]').click()
    })
})

describe('Operation Addeding with negative numbers', () => {
    it('Zero add negative 2',() =>{
        cy.get('[id=btn-sum]').click()
        cy.get('[id=btn2]').click()
        cy.get('[id=btn-pm]').click()
        cy.get('[id=btn-eql]').click()
        cy.get('[id=result]').should('contain', '-2')
        cy.get('[id=btn-clr]').click()
    })
})

describe('Operation Addeding with positive float numbers', () => {
    it('Zero add 0.2',() =>{
        cy.get('[id=btn-sum]').click()
        cy.get('[id=btn-dot]').click()
        cy.get('[id=btn2]').click()
        cy.get('[id=btn-eql]').click()
        cy.get('[id=result]').should('contain', '0.2')
        cy.get('[id=btn-clr]').click()
    })
})

describe('Operation Addeding with negative float numbers', () => {
    it('Zero add negative 0.2',() =>{
        cy.get('[id=btn-sum]').click()
        cy.get('[id=btn-dot]').click()
        cy.get('[id=btn2]').click()
        cy.get('[id=btn-pm]').click()
        cy.get('[id=btn-eql]').click()
        cy.get('[id=result]').should('contain', '-0.2')
        cy.get('[id=btn-clr]').click()
    })
})




// describe('Operation Substraction', () => {
    // it('Click on add button #1', () => {
    //     cy.get('[id=btn-sub]').click()
    //     cy.get('[id=btn-sub]').should('be.disabled')
    //     cy.get('[id=btn-sub]').should('be.colored', '#e07a5f')
    //     cy.get('[id=btn-eql]').click()
    //     cy.get('[id=btn-sub]').should('not.be.disabled')
    //     cy.get('[id=btn-sub]').should('be.colored', '#f2cc8f')
    // })
    // it('Click on add button #2', () => {
    //     cy.get('[id=btn-sub]').click()
    //     cy.get('[id=btn-sub]').should('be.disabled')
    //     cy.get('[id=btn-sub]').should('be.colored', '#e07a5f')
    //     cy.get('[id=btn-clr]').click()
    //     cy.get('[id=btn-sub]').should('not.be.disabled')
    //     cy.get('[id=btn-sub]').should('be.colored', '#f2cc8f')
    // })
// })

// describe('Operation Deletion', () => {
    // it('Click on add button #1', () => {
    //     cy.get('[id=btn-div]').click()
    //     cy.get('[id=btn-div]').should('be.disabled')
    //     cy.get('[id=btn-div]').should('be.colored', '#e07a5f')
    //     cy.get('[id=btn-eql]').click()
    //     cy.get('[id=btn-div]').should('not.be.disabled')
    //     cy.get('[id=btn-div]').should('be.colored', '#f2cc8f')
    // })
    // it('Click on add button #2', () => {
    //     cy.get('[id=btn-div]').click()
    //     cy.get('[id=btn-div]').should('be.disabled')
    //     cy.get('[id=btn-div]').should('be.colored', '#e07a5f')
    //     cy.get('[id=btn-clr]').click()
    //     cy.get('[id=btn-div]').should('not.be.disabled')
    //     cy.get('[id=btn-div]').should('be.colored', '#f2cc8f')
    // })
// })

// describe('Operation Multiplication', () => {
    // it('Click on add button #1', () => {
    //     cy.get('[id=btn-mult]').click()
    //     cy.get('[id=btn-mult]').should('be.disabled')
    //     cy.get('[id=btn-mult]').should('be.colored', '#e07a5f')
    //     cy.get('[id=btn-eql]').click()
    //     cy.get('[id=btn-mult]').should('not.be.disabled')
    //     cy.get('[id=btn-mult]').should('be.colored', '#f2cc8f')
    // })
    // it('Click on add button #2', () => {
    //     cy.get('[id=btn-mult]').click()
    //     cy.get('[id=btn-mult]').should('be.disabled')
    //     cy.get('[id=btn-mult]').should('be.colored', '#e07a5f')
    //     cy.get('[id=btn-clr]').click()
    //     cy.get('[id=btn-mult]').should('not.be.disabled')
    //     cy.get('[id=btn-mult]').should('be.colored', '#f2cc8f')
    // })
// })