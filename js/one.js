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

console.log(posOfDupSimpler('shannon'));
