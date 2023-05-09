/**
 * @Author: 韩祺涛
 * @Date: 2023-04-25
 * @Project: node
 */

function arrayToHeavy(array) {
    let hs = [];
    let jsonHs = [];
    array.forEach(element => {
        if(jsonHs.indexOf(JSON.stringify(element))<0){
            hs.push(element);
            jsonHs.push(JSON.stringify(element))
        }
    });
    return hs;
}

function arrayToHeavyByKey(array, key) {
    let hash = {};
    array = array.reduce((preVal, curVal) => {
        hash[curVal[key]] ? '' : hash[curVal[key]] = true && preVal.push(curVal);
        return preVal
    }, [])
    return array;
}
module.exports = {
    arrayToHeavy,
    arrayToHeavyByKey
}
