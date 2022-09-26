import {addCommaDividersOnFlow, removeCommaDividers, addCommaDividerFloat, addCommaDividers} from "./helper/commaDividers.js";
import isFloat from "./helper/isFloat.js"
import checkResultLength from "./helper/checkResultLength.js"
import longIntToExponential from "./helper/longIntToExponent.js"

const result = document.getElementById('result')

const btn0 = document.getElementById('btn0')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')

const btnClr = document.getElementById('btn-clr')
const btnPlusMin = document.getElementById('btn-pm')
const btnPercent = document.getElementById('btn-perc')
const btnDot = document.getElementById('btn-dot')

const btnSum = document.getElementById('btn-sum')
const btnSub = document.getElementById('btn-sub')
const btnMult = document.getElementById('btn-mult')
const btnDiv = document.getElementById('btn-div')
const btnResult = document.getElementById('btn-eql')

////default values
const MaxLeng = 19
const MaxLengFloat = 17
let value = ''
let n = 0
let minusFlag = false
let minus = ''
let dotFlag = false
let percentFlag = false
let negativeNum = ''
let sumFlag = false
let resultEql = 0
let eqlFlag = false
let longNum = false
let multFlag = false


btnClr.addEventListener('click',() => {
    setToDefault()
    result.innerText = '0'
})

btnPlusMin.addEventListener('click', () => {
    minusFlag = !minusFlag
    if(minusFlag === true){
       if(value.length === 0){
         minus = '-'
         result.innerText = minus + '0'
       }else{
         minus = '-'
         result.innerText = minus + value
       }
    }else{
        minus = ''
        if(value.length === 0){
            result.innerText = minus + '0'
          }else{
            result.innerText = minus + value
          }
    }
})

btnDot.addEventListener('click', () => {
    if(dotFlag !== true){
        if(value.length === 0){
            value += '0.'
        }else{
            value += '.'
        }
        result.innerText = minus + value
    }
    dotFlag = true
})

btnPercent.addEventListener('click', () =>{
    percentFlag = true
    let number
    if(value.length !== 0){
        if(value.length === 2 && dotFlag === true){
            setToDefault()
            result.innerText = '0'
        }else if(dotFlag !== true){
            if(value.length >= 4){
                number = parseInt(removeCommaDividers(value))
                number = number / 100
                if(isFloat(number)){
                    value = addCommaDividerFloat(number.toString())
                    dotFlag === true
                }else{
                    console.log(number)
                    value = addCommaDividers(number.toString())
                }
            }else{
                number = parseInt(value)
                value = number === 100 ? 1 : number/100
            }
            result.innerText = minus + value
        }else if(dotFlag === true){
            number = parseFloat(removeCommaDividers(value))
            number = number / 100
            value = addCommaDividerFloat(number.toString())
            result.innerText = minus + value
        }
    }
})

btnSum.addEventListener('click', () => {
    sumFlag = true
    dotFlag = false
    resultEql = value
    if(minusFlag === true){
        negativeNum = '-'
        minus = ''
        minusFlag = false
    }
    value = ''
    n = 0
    btnSum.style.backgroundColor = '#e07a5f'
    btnSum.disabled = true
})

btnResult.addEventListener('click', () => {
    let variable1
    let variable2
    let res
    eqlFlag = true

    variable1 = negativeNum + removeCommaDividers(resultEql)
    variable2 = minus + removeCommaDividers(value)
    value = ''

    if(checkResultLength(variable1,variable2, sumFlag, multFlag)){
        longNum = true
    }
    variable1 = Number(variable1)
    variable2 = Number(variable2)
    

    ///sum
    if(sumFlag === true){
        btnSum.style.backgroundColor = '#f2cc8f'
        btnSum.disabled = false
        res = variable1 + variable2
        console.log('var1', variable1, 'var2', variable2,'res', res)
        res = isNegative(res)
        if(longNum){
            dotFlag = false
            value = longIntToExponential(res)
        }else{
            if(isFloat(res) === true){
                value = addCommaDividerFloat(res.toString())
            }else{
                dotFlag = false
                value = addCommaDividers(res.toString())
            }
        }
        //console.log(dotFlag)
        sumFlag = false
    }

    result.innerText = minus + value
})

btn0.addEventListener('click', () =>{
    if(percentFlag === true){
        setToDefault()
        result.innerText = '0'
    }
    if(eqlFlag === true && sumFlag === false){
        setToDefault()
        result.innerText = '0'
    }
    if(value.length !== 0){
        addToInnerText('0') 
    }
})

btn1.addEventListener('click', () => {
    if(percentFlag === true){
        setToDefault()
    }
    if(eqlFlag === true && sumFlag === false){
        setToDefault()
    }
    addToInnerText('1') 
})

btn2.addEventListener('click', () => {
    if(percentFlag === true){
        setToDefault()
    }
    if(eqlFlag === true && sumFlag === false){
        setToDefault()
    }
    addToInnerText('2') 
})

btn3.addEventListener('click', () => {
    if(percentFlag === true){
        setToDefault()
    }
    if(eqlFlag === true && sumFlag === false){
        setToDefault()
    }
    addToInnerText('3') 
})

btn4.addEventListener('click', () => {
    if(percentFlag === true){
        setToDefault()
    }
    if(eqlFlag === true && sumFlag === false){
        setToDefault()
    }
    addToInnerText('4') 
})

btn5.addEventListener('click', () => {
    if(percentFlag === true){
        setToDefault()
    }
    if(eqlFlag === true && sumFlag === false){
        setToDefault()
    }
    addToInnerText('5') 
})

btn6.addEventListener('click', () => {
    if(percentFlag === true){
        setToDefault()
    }
    if(eqlFlag === true && sumFlag === false){
        setToDefault()
    }
    addToInnerText('6') 
})

btn7.addEventListener('click', () => {
    if(percentFlag === true){
        setToDefault()
    }
    if(eqlFlag === true && sumFlag === false){
        setToDefault()
    }
    addToInnerText('7') 
})

btn8.addEventListener('click', () => {
    if(percentFlag === true){
        setToDefault()
    }
    if(eqlFlag === true && sumFlag === false){
        setToDefault()
    }
    addToInnerText('8') 
})

btn9.addEventListener('click', () => {
    if(percentFlag === true){
        setToDefault()
    }
    if(eqlFlag === true && sumFlag === false){
        setToDefault()
    }
    addToInnerText('9') 
})

function addToInnerText(num){
    let max 
    if(dotFlag){
        max = MaxLengFloat
    }else{
        max = MaxLeng
    }
    if(value.length < max){
        value += num
        n++
        if(n >= 4){
            if(dotFlag === false){
                value = addCommaDividersOnFlow(value)
                // console.log(value)
            }
        }
        result.innerText = minus + value
    }  
}

function isNegative(num){
    if(num < 0){
        minus = '-'
        minusFlag = true
        return Math.abs(num)
    }else{
        minus = ''
        minusFlag = false
        return num
    }
}

function setToDefault(){
    percentFlag = false
    dotFlag = false
    eqlFlag = false
    minusFlag = false
    longNum = false
    value = ''
    minus = ''
    n = 0
    resultEql = 0
    if(sumFlag){
        btnSum.style.backgroundColor =  '#f2cc8f'
        btnSum.disabled = false
        sumFlag = false
    }
    // if(subFlag){
    //     btnSub.style.backgroundColor = '#f2cc8f'
    //     btnSub.disabled = false
    //     subFlag = false
    // }
    // if(multFlag){
    //     btnMult.style.backgroundColor = '#f2cc8f'
    //     btnMult.disabled = false
    //     multFlag = false
    // }
    // if(divFlag){
    //     btnDiv.style.backgroundColor = '#f2cc8f'
    //     btnDiv.disabled = false
    //     divFlag = false
    // }
}
