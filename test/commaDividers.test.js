const {addCommaDividersOnFlow, addCommaDividers, removeCommaDividers, addCommaDividerFloat} = require('../helper/commaDividers')

describe("addCommaDividersOnFlow() gets positive numbers", () => {
    test('#1 check one digit length number', () => {
        expect(addCommaDividersOnFlow('1')).toBe(undefined)
    })
    test('#2 check two digits length number', () => {
        expect(addCommaDividersOnFlow('11')).toBe(undefined)
    })
    test('#3 check three digits length number', () => {
        expect(addCommaDividersOnFlow('101')).toBe(undefined)
    })
    test('#4 check four digits length number', () => {
        expect(addCommaDividersOnFlow('1010')).toEqual('1,010')
    })
    test('#5 check 5 digits length number', () => {
        expect(addCommaDividersOnFlow('11,010')).toEqual('11,010')
    })
    test('#6 check 6 digits length number', () => {
        expect(addCommaDividersOnFlow('111,010')).toEqual('111,010')
    })
    test('#7 check 7 digits length number', () => {
        expect(addCommaDividersOnFlow('1010,111')).toEqual('1,010,111')
    })
    test('#8 check 8 digits length number', () => {
        expect(addCommaDividersOnFlow('10,010,111')).toEqual('10,010,111')
    })
    test('#9 check 9 digits length number', () => {
        expect(addCommaDividersOnFlow('100,010,111')).toEqual('100,010,111')
    })
    test('#10 check 10 digits length number', () => {
        expect(addCommaDividersOnFlow('1100,011,100')).toEqual('1,100,011,100')
    })
    test('#11 check 11 digits length number', () => {
        expect(addCommaDividersOnFlow('11,100,011,100')).toEqual('11,100,011,100')
    })
    test('#12 check 12 digits length number', () => {
        expect(addCommaDividersOnFlow('101,111,000,100')).toEqual('101,111,000,100')
    })
    test('#13 check 13 digits length number', () => {
        expect(addCommaDividersOnFlow('1100,111,000,100')).toEqual('1,100,111,000,100')
    })
    test('#14 check 14 digits length number', () => {
        expect(addCommaDividersOnFlow('10,100,111,000,100')).toEqual('10,100,111,000,100')
    })
    test('#15 check 15 digits length number', () => {
        expect(addCommaDividersOnFlow('110,100,111,000,100')).toEqual('110,100,111,000,100')
    })
    test('#16 check 16 digits length number', () => {
        expect(addCommaDividersOnFlow('1010,100,111,000,100')).toEqual('1,010,100,111,000,100')
    })
})

describe("Check if commas dividers deleted from number", () =>{
    test('#1 check 3 digits length number', () => {
        expect(removeCommaDividers('110')).toBe('110')
    })
    test('#2 check 4 digits length number', () => {
        expect(removeCommaDividers('1,100')).toBe('1100')
    })
    test('#3 check 5  digits length number', () => {
        expect(removeCommaDividers('11,011')).toBe('11011')
    })
    test('#4 check 6  digits length number', () => {
        expect(removeCommaDividers('110,101')).toBe('110101')
    })
    test('#5 check 7  digits length number', () => {
        expect(removeCommaDividers('1,110,101')).toBe('1110101')
    })
    test('#8 check 8 digits length number', () => {
        expect(removeCommaDividers('10,010,111')).toEqual('10010111')
    })
    test('#9 check 9 digits length number', () => {
        expect(removeCommaDividers('100,010,111')).toEqual('100010111')
    })
    test('#10 check 10 digits length number', () => {
        expect(removeCommaDividers('1100,011,100')).toEqual('1100011100')
    })
    test('#11 check 11 digits length number', () => {
        expect(removeCommaDividers('11,100,011,100')).toEqual('11100011100')
    })
    test('#12 check 12 digits length number', () => {
        expect(removeCommaDividers('101,111,000,100')).toEqual('101111000100')
    })
    test('#13 check 13 digits length number', () => {
        expect(removeCommaDividers('1100,111,000,100')).toEqual('1100111000100')
    })
})

describe("addCommaDividers() gets positive numbers", () => {
    test('#1 check one digits length number', () => {
        expect(addCommaDividers('1')).toBe('1')
    })
    test('#2 check two digits length number', () => {
        expect(addCommaDividers('23')).toBe('23')
    })
    test('#3 check three digits length number', () => {
        expect(addCommaDividers('123')).toBe('123')
    })
    test('#4 check four digits length number', () => {
        expect(addCommaDividers('1010')).toEqual('1,010')
    })
    test('#5 check 5 digits length number', () => {
        expect(addCommaDividers('11010')).toEqual('11,010')
    })
    test('#6 check 6 digits length number', () => {
        expect(addCommaDividers('111010')).toEqual('111,010')
    })
    test('#7 check 7 digits length number', () => {
        expect(addCommaDividers('1010111')).toEqual('1,010,111')
    })
    test('#8 check 8 digits length number', () => {
        expect(addCommaDividers('10010111')).toEqual('10,010,111')
    })
    test('#9 check 9 digits length number', () => {
        expect(addCommaDividers('100010111')).toEqual('100,010,111')
    })
    test('#10 check 10 digits length number', () => {
        expect(addCommaDividers('1100011100')).toEqual('1,100,011,100')
    })
    test('#11 check 11 digits length number', () => {
        expect(addCommaDividers('11100011100')).toEqual('11,100,011,100')
    })
    test('#12 check 12 digits length number', () => {
        expect(addCommaDividers('101111000100')).toEqual('101,111,000,100')
    })
    test('#13 check 13 digits length number', () => {
        expect(addCommaDividers('1100111000100')).toEqual('1,100,111,000,100')
    })
})

describe("addCommaDividerFloat() gets positive numbers", () => {
    test('#1 check one digit before dot and one digit after', () => {
        expect(addCommaDividerFloat('1.1')).toBe('1.1')
    })
    test('#2 check two digits before dot and two digit after', () => {
        expect(addCommaDividerFloat('23.23')).toBe('23.23')
    })
    test('#3 check three digits before dot and one digit after', () => {
        expect(addCommaDividerFloat('123.8')).toBe('123.8')
    })
    test('#4 check 4 digits before dot and 4 digit after', () => {
        expect(addCommaDividerFloat('1234.9876')).toBe('1,234.9876')
    })
    test('#5 check 4 digits before dot and 6 digit after', () => {
        expect(addCommaDividerFloat('1234.987656')).toBe('1,234.987656')
    })
    test('#6 check 6 digits before dot and 8 digit after', () => {
        expect(addCommaDividerFloat('123456.22234456')).toBe('123,456.22234456')
    })
    test('#7 check 10 digits before dot and 8 digit after', () => {
        expect(addCommaDividerFloat('8145623456.22234456')).toBe('8,145,623,456.22234456')
    })
})