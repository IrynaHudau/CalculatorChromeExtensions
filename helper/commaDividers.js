function addCommaDividersOnFlow(val){
    let valueArr = Array.from(val)
    if(valueArr.length >= 4){
        let addLen = (val.length === 4 || val.length === 8 || val.length === 12 || val.length === 16 || val.length === 20) ? 1 :0
        let commasArr = new Array(val.length+addLen).fill(',')
        let i = commasArr.length-1
        let j = valueArr.length-1
        let count = 4
        let ind = 1
        while(i >= 0){
            if(ind !== count){
                if(valueArr[j] !== ','){
                    commasArr[i] = valueArr[j]
                    i--
                }
                j--
            }else{
                i-- 
                ind = -1
            }
            ind++
        }
        return commasArr.join('')
    }else{
        return undefined
    }   
}

function addCommaDividers(val) {
    if(val.length >= 4){
        let commasAmount = 0
        if(val.length >= 4 && val.length < 7){
            commasAmount = 1
        }else if(val.length >= 7 && val.length < 10){
            commasAmount = 2
        }else if(val.length >= 10 && val.length < 13){
            commasAmount = 3
        }else if(val.length >= 13 && val.length < 16){
            commasAmount = 4
        }   
        let commasArr = new Array(val.length+commasAmount).fill(',')
        let i = val.length-1
        let j = commasArr.length-1
        let count = 3
        while(i >= 0){
            if(count !== 0){
                commasArr[j] = val[i]
                j--
                i--
                count--
            }else{
                count = 3
                j--
            }
        }
        return commasArr.join('')
    }else{
        return val
    }  
}

function removeCommaDividers(val){
    let st
    st = val.match(/[\d.]*/gi)
    // console.log('st', st)
    if(st.length === 1){
        return st
    }else{
        return st.join('')
    }
}

function addCommaDividerFloat(val){
    let arr = val.split('.')
    let newStr =  arr[0].length >= 4 ? addCommaDividers(arr[0]) : arr[0]
    let newValue = newStr.concat('.',arr[1])
    return newValue
}

export {addCommaDividersOnFlow, addCommaDividers, removeCommaDividers, addCommaDividerFloat}
// module.exports = {addCommaDividersOnFlow, addCommaDividers, removeCommaDividers, addCommaDividerFloat}