/**
 * Handy utilities
 */


function isDefined(obj) {
    return (typeof obj !== 'undefined');
}

function isSet(obj) {
    return (typeof obj !== 'undefined') && (obj !== null);
}

function isString(obj) {
    return (typeof obj === 'string' || obj instanceof String);
}

function isFunction(obj) {
    return (typeof (obj) === 'function');
}

function isEmptyString(str) {
    return (!str);
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = {
    isDefined : isDefined,
    isSet : isSet,
    isString : isString,
    isFunction : isFunction,
    isEmptyString : isEmptyString,
		isNumber : isNumber
	
};
