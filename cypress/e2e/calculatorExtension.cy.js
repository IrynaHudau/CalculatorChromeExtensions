describe('caculatorExtention.cy.js', () => {
  it('Should visit', () => {
    cy.visit('http://127.0.0.1:5500/CalculatorChrom/index.html')
  })
  it('Was pressded twice zero', () => {
     const clickAmount = 2
     for(let i = 0; i < clickAmount; i++){
        cy.get('[id=btn0]').click()
     }
     cy.get('[id=result]').should('contain', '0')
  })
  it('Clean result fild', () =>{
    cy.get('[id=btn-clr]').click()
    cy.get('[id=result]').should('contain', '0')
  })
  it('Was pressed twice one', () => {
    const clickAmount = 2
     for(let i = 0; i < clickAmount; i++){
        cy.get('[id=btn1]').click()
     }
     cy.get('[id=result]').should('contain', '11')
     cy.get('[id=btn-clr]').click()
  })
  it('Was pressed one and zero', () =>{
    cy.get('[id=btn1]').click()
    cy.get('[id=btn0]').click()
    cy.get('[id=result]').should('contain', '10')
    cy.get('[id=btn-clr]').click()
  })
  it('Was pressed zero and one', () =>{
    cy.get('[id=btn0]').click()
    cy.get('[id=btn1]').click()
    cy.get('[id=result]').should('contain', '1')
    cy.get('[id=btn-clr]').click()
  })
})

describe('Get negative and positive numbers', () => {
    it('Was pressed 0 and minus button', () => {
      cy.get('[id=btn0]').click()
      cy.get('[id=btn-pm]').click()
      cy.get('[id=result]').should('contain', '-0')
      cy.get('[id=btn-pm]').click()
      cy.get('[id=result]').should('contain', '0')
    })

    it('Was pressed 3 times 2 and minus button', () => {
      const clickAmount = 3
      for(let i = 0; i < clickAmount; i++){
          cy.get('[id=btn2]').click()
      }
      cy.get('[id=result]').should('contain', '222')
      cy.get('[id=btn-pm]').click()
      cy.get('[id=result]').should('contain', '-222')
      cy.get('[id=btn-pm]').click()
      cy.get('[id=result]').should('contain', '222')
      cy.get('[id=btn-clr]').click()
    })

    it('Was pressed number longer than 3 digits and minus button', () => {
      cy.get('[id=btn1]').click()
      cy.get('[id=btn2]').click()
      cy.get('[id=btn3]').click()
      cy.get('[id=btn4]').click()
      cy.get('[id=btn-pm]').click()
      cy.get('[id=result]').should('contain', '-1,234')
      cy.get('[id=btn-pm]').click()
      cy.get('[id=result]').should('contain', '1,234')
      cy.get('[id=btn-clr]').click()
      cy.get('[id=result]').should('contain', '0')
    })

    it('Was pressed number longer than 6 digits and minus button', () => {
      cy.get('[id=btn1]').click()
      cy.get('[id=btn2]').click()
      cy.get('[id=btn3]').click()
      cy.get('[id=btn4]').click()
      cy.get('[id=btn5]').click()
      cy.get('[id=btn6]').click()
      cy.get('[id=btn-pm]').click()
      cy.get('[id=result]').should('contain', '-123,456')
      cy.get('[id=btn-pm]').click()
      cy.get('[id=result]').should('contain', '123,456')
      cy.get('[id=btn-pm]').click()
      cy.get('[id=btn-clr]').click()
      cy.get('[id=result]').should('contain', '0')
    })

    it('Check  negative and positive number longer than maxLength', () => {
      cy.get('[id=btn1]').click()
      cy.get('[id=btn2]').click()
      cy.get('[id=btn3]').click()
      cy.get('[id=btn4]').click()
      cy.get('[id=btn5]').click()
      cy.get('[id=btn6]').click()
      cy.get('[id=btn7]').click()
      cy.get('[id=btn8]').click()
      cy.get('[id=btn9]').click()
      cy.get('[id=btn1]').click()
      cy.get('[id=btn2]').click()
      cy.get('[id=btn3]').click()
      cy.get('[id=btn4]').click()
      cy.get('[id=btn5]').click()
      cy.get('[id=btn6]').click()
      cy.get('[id=btn7]').click()
      cy.get('[id=result]').should('contain', '123,456,789,123,456')
      cy.get('[id=btn-pm]').click()
      cy.get('[id=result]').should('contain', '-123,456,789,123,456')
      cy.get('[id=btn-clr]').click()
    })
})

let btnArray = ['[id=btn0]','[id=btn1]', '[id=btn2]','[id=btn3]','[id=btn4]','[id=btn5]','[id=btn6]','[id=btn7]','[id=btn8]','[id=btn9]']
let randomBtn = Math.floor(Math.random() * btnArray.length)

describe('Get float numbers', () => {

  it('Pressed just dot', () => {
     cy.get('[id=btn-dot]').click()
     cy.get('[id=result]').should('contain', '0.')
     cy.get('[id=btn-clr]').click()
  })

  it('Pressed n times dot', () => {
    let n = 5
    for(let i = 0; i < n;i++){
      cy.get('[id=btn-dot]').click()
    }
    cy.get('[id=result]').should('contain', '0.')
    cy.get('[id=btn-clr]').click()
 })

 it('Pressing random number n times and dot ones, another random button pressed n times', () => {
  let n = 5
  for(let i = 0; i < n;i++){
    cy.get(btnArray[randomBtn]).click()
  }
  cy.get('[id=btn-dot]').click()
  let res1 = new Array(n+1).fill(randomBtn)
  res1[2] = ','
  res1 = res1.join('')
  cy.get('[id=result]').should('contain', `${res1}.`)
  randomBtn = Math.floor(Math.random() * btnArray.length)
  for(let i = 0; i < n;i++){
    cy.get(btnArray[randomBtn]).click()
  }
  let res2 = new Array(n).fill(randomBtn).join('')
  cy.get('[id=result]').should('contain', `${res1}.${res2}`)
  cy.get('[id=btn-clr]').click()
})

  it('Pressed any random number', () => {
    cy.get(btnArray[randomBtn]).click()
    cy.get('[id=btn-dot]').click()
    cy.get('[id=result]').should('contain', `${randomBtn}.`)
  })

  it('Pressed add/remove minus + previous test', () => {
    cy.get('[id=btn-pm]').click()
    cy.get('[id=result]').should('contain', `-${randomBtn}.`)
    cy.get('[id=btn-pm]').click()
    cy.get('[id=result]').should('contain', `${randomBtn}.`)
    cy.get('[id=btn-clr]').click()
  })

  it('Pressed two random numbers between dot', () => {
    cy.get(btnArray[randomBtn]).click()
    cy.get('[id=btn-dot]').click()
    cy.get('[id=result]').should('contain', `${randomBtn}.`)
    let oldRandNum = randomBtn
    randomBtn = Math.floor(Math.random() * btnArray.length)
    cy.get(btnArray[randomBtn]).click()
    cy.get('[id=result]').should('contain', `${oldRandNum}.${randomBtn}`)
    cy.get('[id=btn-clr]').click()
  })

  it('Check if commas divider appear after dot was pressed', () => {
    cy.get(btnArray[randomBtn]).click()
    cy.get('[id=btn-dot]').click()
    let oldRandNum = randomBtn
    let n = 5
    randomBtn = Math.floor(Math.random() * btnArray.length)
    for(let i = 0; i < n;i++){
      cy.get(btnArray[randomBtn]).click()
    }
    let res = new Array(n).fill(randomBtn).join('')
    cy.get('[id=result]').should('contain', `${oldRandNum}.${res}`)
    cy.get('[id=btn-clr]').click()
  })

  it('Check float number longer than maxLength', () => {
    cy.get('[id=btn4]').click()
    cy.get('[id=btn2]').click()
    cy.get('[id=btn-dot]').click()
    cy.get('[id=btn1]').click()
    cy.get('[id=btn2]').click()
    cy.get('[id=btn3]').click()
    cy.get('[id=btn4]').click()
    cy.get('[id=btn5]').click()
    cy.get('[id=btn6]').click()
    cy.get('[id=btn7]').click()
    cy.get('[id=btn8]').click()
    cy.get('[id=btn9]').click()
    cy.get('[id=btn1]').click()
    cy.get('[id=btn2]').click()
    cy.get('[id=btn3]').click()
    cy.get('[id=btn4]').click()
    cy.get('[id=btn5]').click()
    cy.get('[id=btn6]').click()
    cy.get('[id=btn7]').click()
    cy.get('[id=btn8]').click()
    cy.get('[id=result]').should('contain', '42.12345678912345')
    cy.get('[id=btn-clr]').click()
  })
})

describe('Checking work of percent button', () => {
  it('Pressed percent button before any buttons', () => {
    cy.get('[id=btn-perc]').click()
    cy.get('[id=result]').should('contain', '0')
    cy.get('[id=btn-clr]').click()
  })
  it('Pressed plus/minus than percent button before any buttons', () => {
    cy.get('[id=btn-pm]').click()
    cy.get('[id=btn-perc]').click()
    cy.get('[id=result]').should('contain', '0')
    cy.get('[id=btn-clr]').click()
  })
  it('Pressed dot button than percent button', () => {
    cy.get('[id=btn-dot]').click()
    cy.get('[id=btn-perc]').click()
    cy.get('[id=result]').should('contain', '0')
    cy.get('[id=btn-clr]').click()
  })

  it('Pressed dot button and minus/plus button than percent button', () => {
    cy.get('[id=btn-dot]').click()
    cy.get('[id=btn-pm]').click()
    cy.get('[id=btn-perc]').click()
    cy.get('[id=result]').should('contain', '0')
    cy.get('[id=btn-clr]').click()
  })

  it('Check float number and percent button,', () => {
    cy.get('[id=btn-dot]').click()
    cy.get('[id=btn1]').click()
    cy.get('[id=btn-perc]').click()
    cy.get('[id=result]').should('contain', '0.001')
    cy.get('[id=btn-clr]').click()
  })

  it('Check negative float number and percent button,', () => {
    cy.get('[id=btn-dot]').click()
    cy.get('[id=btn1]').click()
    cy.get('[id=btn-pm]').click()
    cy.get('[id=btn-perc]').click()
    cy.get('[id=result]').should('contain', '-0.001')
    cy.get('[id=btn-clr]').click()
  })

  it('Check float big number and percent button #1,', () => {
    cy.get('[id=btn5]').click()
    cy.get('[id=btn3]').click()
    cy.get('[id=btn5]').click()
    cy.get('[id=btn-dot]').click()
    cy.get('[id=btn1]').click()
    cy.get('[id=btn-perc]').click()
    cy.get('[id=result]').should('contain', '5.351')
    cy.get('[id=btn-clr]').click()
  })

  it('Check negatine float big number and percent button #2,', () => {
    cy.get('[id=btn5]').click()
    cy.get('[id=btn-pm]').click()
    cy.get('[id=btn3]').click()
    cy.get('[id=btn5]').click()
    cy.get('[id=btn-dot]').click()
    cy.get('[id=btn1]').click()
    cy.get('[id=btn-perc]').click()
    cy.get('[id=result]').should('contain', '5.351')
    cy.get('[id=btn-clr]').click()
  })

  it('Check float big number and percent button #3,', () => {
    cy.get('[id=btn2]').click()
    cy.get('[id=btn1]').click()
    cy.get('[id=btn0]').click()
    cy.get('[id=btn7]').click()
    cy.get('[id=btn-dot]').click()
    cy.get('[id=btn3]').click()
    cy.get('[id=btn0]').click()
    cy.get('[id=btn-perc]').click()
    cy.get('[id=result]').should('contain', '21.073')
    cy.get('[id=btn-clr]').click()
  })

  it('Check negative float big number and percent button #4,', () => {
    cy.get('[id=btn2]').click()
    cy.get('[id=btn1]').click()
    cy.get('[id=btn0]').click()
    cy.get('[id=btn-pm]').click()
    cy.get('[id=btn7]').click()
    cy.get('[id=btn-dot]').click()
    cy.get('[id=btn3]').click()
    cy.get('[id=btn0]').click()
    cy.get('[id=btn-perc]').click()
    cy.get('[id=result]').should('contain', '-21.073')
    cy.get('[id=btn-clr]').click()
  })

  it('Check float big number and percent button #5,', () => {
    cy.get('[id=btn1]').click()
    cy.get('[id=btn8]').click()
    cy.get('[id=btn2]').click()
    cy.get('[id=btn1]').click()
    cy.get('[id=btn3]').click()
    cy.get('[id=btn8]').click()
    cy.get('[id=btn-dot]').click()
    cy.get('[id=btn3]').click()
    cy.get('[id=btn0]').click()
    cy.get('[id=btn7]').click()
    cy.get('[id=btn4]').click()
    cy.get('[id=btn-perc]').click()
    cy.get('[id=result]').should('contain', '1,821.38307')
    cy.get('[id=btn-clr]').click()
  })

  it('Check negative float big number and percent button #6,', () => {
    cy.get('[id=btn1]').click()
    cy.get('[id=btn-pm]').click()
    cy.get('[id=btn8]').click()
    cy.get('[id=btn2]').click()
    cy.get('[id=btn1]').click()
    cy.get('[id=btn3]').click()
    cy.get('[id=btn8]').click()
    cy.get('[id=btn-dot]').click()
    cy.get('[id=btn3]').click()
    cy.get('[id=btn0]').click()
    cy.get('[id=btn7]').click()
    cy.get('[id=btn4]').click()
    cy.get('[id=btn-perc]').click()
    cy.get('[id=result]').should('contain', '1,821.38307')
    cy.get('[id=btn-clr]').click()
  })

  it('Pressen any 3 digit than percent button', () => {
     cy.get('[id=btn1]').click()
     cy.get('[id=btn5]').click()
     cy.get('[id=btn3]').click()
     cy.get('[id=btn-perc]').click()
     cy.get('[id=result]').should('contain', '1.53')
     cy.get('[id=btn-clr]').click()
  })

  it('Pressen any 4 digit than percent button', () => {
    cy.get('[id=btn1]').click()
    cy.get('[id=btn5]').click()
    cy.get('[id=btn3]').click()
    cy.get('[id=btn5]').click()
    cy.get('[id=btn-perc]').click()
    cy.get('[id=result]').should('contain', '15.35')
    cy.get('[id=btn-clr]').click()
 })

 it('Pressen any 7 digit than percent button', () => {
  cy.get('[id=btn2]').click()
  cy.get('[id=btn1]').click()
  cy.get('[id=btn5]').click()
  cy.get('[id=btn3]').click()
  cy.get('[id=btn5]').click()
  cy.get('[id=btn0]').click()
  cy.get('[id=btn0]').click()
  cy.get('[id=btn-perc]').click()
  cy.get('[id=result]').should('contain', '21,535')
  cy.get('[id=btn-clr]').click()
})
})