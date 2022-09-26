const isFloat = require("../helper/isFloat.js")
const checkResultLength = require("../helper/checkResultLength.js")

describe("Check number, if it isFloat()", () => {
    test('#1 check number isFloat or not', () => {
        expect(isFloat(23)).toBe(false)
    })

    test('#2 check number isFloat or not', () => {
        expect(isFloat(23)).toBe(false)
    });

    test('#3 check number isFloat or not', () => {
        expect(isFloat(23.6)).toBe(true)
    })
})

describe("Check if number is BigInt, checkResultLength()", () => {
    test('convert number string with length less than 16 with addeding', () => {
        expect(checkResultLength('1234','1234',true, false)).toBe(false)
    });
    
    test('convert number string with length less than 16 with multiplication', () => {
        expect(checkResultLength('1234','1234',false, true)).toBe(false)
    });
    
    test('#1 convert number string with length biger than 16 with addeding', () => {
        expect(checkResultLength('123467892345678','1234',true, false)).toBe(false)
    });
    
    test('#2 convert number string with length biger than 16 with addeding', () => {
        expect(checkResultLength('999999999999999','1234',true, false)).toBe(true)
    })
    
    test('#3 convert number string with length biger than 16 with multiplication', () => {
        expect(checkResultLength('123467892','1234',false, true)).toBe(false)
    });
    
    test('#4 convert number string with length biger than 16 with multiplication', () => {
        expect(checkResultLength('999999999999999','123456789234',false, true)).toBe(true)
    })
    
})
