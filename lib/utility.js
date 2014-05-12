/**
 * Handy utilities
 */
var moment = require('moment-timezone');

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

function isExistenceNUniqueness(array){
    return array.length === 1;
}

function isExistence(array){
    return array.length >= 1;
}

function getTWCurrentTime(){
    return moment().tz('Asia/Taipei').format('MM Do YYYY, hh:mm:ss a ZZ')
}

module.exports = {
    isDefined : isDefined,
    isSet : isSet,
    isString : isString,
    isFunction : isFunction,
    isEmptyString : isEmptyString,
		isNumber : isNumber,
		isExistenceNUniqueness : isExistenceNUniqueness,
    isExistence : isExistence,
		getTWCurrentTime : getTWCurrentTime
};
