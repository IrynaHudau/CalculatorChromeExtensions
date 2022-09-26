function checkResultLength(str1, str2, added, multip){
    let strLeng = 0
    let result = false
    if(added){
        let max = Math.max(str1.length, str2.length)
        if(max < 16){
            strLeng = (Number(str1)+Number(str2)).toString().length
        }else{
            strLeng = max
        }
    }
    if(multip){
        strLeng = (Number(str1)*Number(str2)).toString().length
    }

    if(strLeng > 15){
        result = true
    }
    return result
}

// module.exports = checkResultLength
export default checkResultLength