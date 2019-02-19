'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(string) {
    let findNumber,
        max,
        min;

    while( string ){
        if (findNumber = parseFloat( string )){
            max = (!max || findNumber > max) ? findNumber : max ;
            min = (!min || findNumber < min) ? findNumber : min ;
            string = string.substring( findNumber.toString().length + 1 ).trim();
        } else {
            string = string.substring(1).trim();
        }
    }

    return {min: min, max: max};
}

