const testContext={};
function setContextData(key,value){
    testContext[key]=value;
}
function getContextData(key){
    return testContext[key]
}
module.exports={setContextData,getContextData}