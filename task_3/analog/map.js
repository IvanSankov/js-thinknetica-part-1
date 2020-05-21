// Реализовать аналог метода map

/**
 * Аналог метода map с искользованием reduce
 *
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
function mapByReduce(arr, fn) {
    if (!Array.isArray(arr) || typeof fn !== 'function') {
        return 'error';
    }

    return arr.reduce((acc, curr) => {
        acc.push(fn(curr));
        return acc;
    }, []);
}