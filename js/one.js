/**
 * https://www.glassdoor.com/Interview/Apple-Front-End-Developer-Interview-Questions-EI_IE1138.0,5_KO6,25.htm
 * 
 * Find the positio of first duplicate
 * element in a string
 */

const posOfDup = (str) => {

    const dups = str.split('').filter((itm, idx, a) => {
        return a.indexOf(itm) !== idx;
    });

    const firstCharThatIsDuplicated = dups[0];
    const dupArray = [];

   str.split('').reduce((a,e,i) => {
        if (e === firstCharThatIsDuplicated) {
            dupArray.push(i);
        }

        return dupArray;
    }, []);

    return dupArray[1];
}

const posOfDupSimpler = (str) => {
    const arr = str.split('');
    let dups = [];

    arr.filter((itm, idx, ar) => {
        if(arr.indexOf(itm) !== idx) {
            nextIndex = idx;
            dups.push({'itm': itm, 'index':idx})  
        }
    });

    return `first duplicated character is \'${ dups[0].itm }\', first duplicated index is ${ dups[0].index }`;
}

// console.log(posOfDupSimpler('shannon'));


/**
 * Concat two arrays and find the unique value(s)
 */

const concatArrOne = [1,2,3,4,5];
const concatArrTwo = [1,2,3,4,5,6];
const concatArrs = concatArrOne.concat(concatArrTwo);
const uniqueVals = [...new Set(concatArrs)];
// console.log(uniqueVals);

/**
 * Input array [3,4,5], output array [20,15,12]
 */

 const iot = (arr) => {
    
    let multiplier = arr.splice(0,1)[0];
    let sums = [];

    return multiply(arr).reverse();

    function multiply(arr) {

        for (let i = 0; i < arr.length; i++) {
            sums.push(multiplier * arr[i]);

            if (i === arr.length - 1) {
                multiplier = arr.splice(0,1)[0];
                multiply(arr);
            }
        }

        return sums;
    }
 }


console.log(iot([3,4,5]));