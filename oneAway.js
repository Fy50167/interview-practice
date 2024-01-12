/**
 * There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away. 
 */

const insertRemove = function(str1, str2) {
    let pointer = 0;
    let marker = false;
    let shortString = '';
    let longString = '';
    if (str1.length < str2.length) { // This if statement is super unoptimized; there should be some way to instantly declare the shorter and longer strings (I think?).
        shortString = str1;
        longString = str2;
    } else if (str2.length < str1.length) {
        shortString = str2;
        longString = str1;
    }
    for (let i = 0; i < shortString.length; i++) {
        if (shortString[i] !== longString[pointer]) {
            if (marker === false) {
                i = i - 1;
                marker = true;
            } else {
                return false
            }
        }
        pointer++;
    }
    return true
}

console.log(insertRemove('pale', 'ple'));
console.log(insertRemove('pales', 'pale'));
console.log(insertRemove('pales', 'pald'));