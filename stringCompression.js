/**
 * Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z). 
 */

const stringCompression = function(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        let count = 1;
        while (str[i] === str[i + 1]) {
            i++;
            count++;
        }
        output = output.concat(str[i] + parseInt(count));
    }
    
    return output
}

console.log(stringCompression('aabcccccaaa'));
console.log(stringCompression('AabccCCcaaa'));
