/**
 * Assume you have a method isSubstring which checks if one word is a substring
of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat"). 
 */

const stringRotation = function(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    
    if ((str1 + str1).includes(str2)) {
        return true
    }
    return false
}

// Look for logic! This question is so easy if you just fully understand what a rotation really is,

console.log(stringRotation('abcde', 'cdeab'));
console.log(stringRotation('abcde', 'abdce'));