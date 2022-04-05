function combine(input1: number| string, input2: number|string, resultConversion: string) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' ){
        result = input1+ input2;
    } else {
        result = input1.toString()+input2.toString()
    }
    if (resultConversion === 'as-number'){
        return +result;
    } else {
        return result.toString()
    }
}

const combindeAges = combine(30, 26, 'as-number');
console.log(combindeAges);

const combineAgesString = combine ('30','26', 'as-number');
console.log(combineAgesString)

const combineNames = combine('max', 'anna', 'as-string')
console.log(combineNames)