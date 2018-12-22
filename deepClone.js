function deepClone(aObject) {
    if (!aObject) {
        return aObject;
    }

    let bObject = Array.isArray(aObject) ? [] : {};
    bObject.prototype = aObject.prototype;

    //console.log(Object.keys(aObject));
    Object.keys(aObject).forEach(
        function(element){
            if (aObject.hasOwnProperty(element)){
                bObject[element] = (typeof aObject[element] === "object") ? deepClone(aObject[element]) : aObject[element];
            }
        })
    return bObject;
}

function main(){
    let testObjFirst = {
        name: "testName",
        age: 20,
        sum: function(a,b){ return a+b },
        anotherObj: {
            anotherName: "anotherName",
            anotherAge: 22
        }
    }

    let testObjSeconf = {
        secondObjectValueFirst : 111,
        secondObjectValueSecond : 222
    };
    let newObj = merge(testObjSeconf, testObjFirst);
    console.log(testObjFirst);
    console.log(newObj);
}
main();
