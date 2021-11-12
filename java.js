const rundomNumberArr= [0,5,25,78,95,46,24,65,81,37,154,954];
let sum=0;
for (let number of rundomNumberArr){
    console.log(number)
    sum+=number
};
console.log(sum)
const checkNumber=25;
for (let i=0; i<rundomNumberArr.length; i+=1 ) {
    console.log (rundomNumberArr[i]);
    if (rundomNumberArr[i]===checkNumber){
        console.log()
        break
    }
}
const checkNumb=27;
for (let i=0; i<rundomNumberArr.length; i+=1 ) {
    console.log (rundomNumberArr[i]);
    if (rundomNumberArr[i]===checkNumb){
        console.log()
        break
    }
}
const check=65;
for (let i=0; i<rundomNumberArr.length; i+=1 ) {
    console.log (rundomNumberArr[i]);
    if (rundomNumberArr[i]===check){
        console.log()
        break
    }
}