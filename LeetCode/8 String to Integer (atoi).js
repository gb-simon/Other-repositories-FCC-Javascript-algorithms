const INT_MIN = Math.pow(-2, 31), INT_MAX = Math.pow(2,31) - 1;
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const atoi = parseInt(str.trim().split(' ')[0]);
    return Number.isInteger(atoi) ? Math.max(INT_MIN, Math.min(INT_MAX, atoi)) : 0;
};