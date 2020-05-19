// Реализовать аналог методов map и filter массива используя метод reduce массива

// filter
function filterByReduce(arr, fn) {
    return arr.reduce((acc, curr) => {
        if (fn(curr))
            acc.push(curr);

        return acc;
    }, [])
}

// map
function mapByReduce(arr, fn) {
    return arr.reduce((acc, curr) => {
        acc.push(fn(curr));
        return acc;
    }, [])
}

console.log(filterByReduce([-1,-2,3,4,-5], f));

function f(x) {
    return x > 0
}