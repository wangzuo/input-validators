var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
module.exports = function (str, options) {
        options = options || {};
        return int.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max);
    };
