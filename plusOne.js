/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var i, j = 0, r = 0, n, c = 0;
    //const n = parseFloat(digits.join(''));
    //digits[digits.length - 1]++;
    //n = digits.toString().reverse().split('');
    if(digits[0] == 9){
        r = 1;
    }

    if(digits[digits.length - 1] == 9){
        c++;
        digits[digits.length - 1] = 0;
        for(i = digits.length - 2; i >= 0 && c != 0; i--){
            if(digits[i] == 9){
                digits[i] += c;
                digits[i] %= 10;
            }
            else {
                digits[i] += 1;
                digits[i] %= 10;
                c--;
            }
        }
    }
    else digits[digits.length - 1] += 1;

    if(digits[0] == 0 && r == 1){

        digits.unshift(1);
    }

    return digits;
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
console.log(plusOne([6,9]));
console.log(plusOne([1,6,9]));
console.log(plusOne([9]));
console.log(plusOne([9, 9]));