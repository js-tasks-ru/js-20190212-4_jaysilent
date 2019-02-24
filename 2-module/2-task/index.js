/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find(obj, value){

    let arrValue = [],
        foundValue;

    for ( let key in obj ) {

        if( typeof obj[key] === 'object' ) {

            let _find;

            if( _find = find( obj[key], value ) )
                arrValue.push( key + '.' + _find);

            //console.log(_find, arrValue);

        } else {

            if( obj[key] === value ) {
                foundValue = key;
            }

        }

    }

    if( arrValue.length > 0 ){
        return ( arrValue.length === 1 ) ? arrValue.join() : arrValue;
    } else if(foundValue !== undefined) {
        return foundValue;
    } else {
        return null
    }

}