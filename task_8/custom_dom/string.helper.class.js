'use strict';

class StringHelper {
    static isString(data) {
        return  typeof data === 'string' || data instanceof String;
    }
}