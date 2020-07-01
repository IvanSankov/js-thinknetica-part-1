'use strict';

/* Пример из интернета для разбора */

const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function ExamplePromise(fn) {
    // store state which can be PENDING, FULFILLED or REJECTED
    let state = PENDING;

    // store value once FULFILLED or REJECTED
    let value = null;

    // store sucess & failure handlers
    let handlers = [];

    function fulfill(result) {
        state = FULFILLED;
        value = result;
        handlers.forEach(handle);
        handlers = null; // ?
    }

    function reject(error) {
        state = REJECTED;
        value = error;
        handlers.forEach(handle);
        handlers = null; // ?
    }

    function resolve(result) {
        try {
            let then = getThen(result);
            if (then) {
                doResolve(then.bind(result), resolve, reject)
                return
            }
            fulfill(result);
        } catch (e) {
            reject(e);
        }
    }

    function handle(handler) {
        if (state === PENDING) {
            handlers.push(handler);
        } else {
            if (state === FULFILLED &&
                typeof handler.onFulfilled === 'function') {
                handler.onFulfilled(value);
            }
            if (state === REJECTED &&
                typeof handler.onRejected === 'function') {
                handler.onRejected(value);
            }
        }
    }

    this.done = function (onFulfilled, onRejected) {
        // ensure we are always asynchronous
        setTimeout(function () {
            handle({
                onFulfilled: onFulfilled,
                onRejected: onRejected
            });
        }, 0);
    }

    this.then = function (onFulfilled, onRejected) {
        let self = this;
        return new ExamplePromise(function (resolve, reject) {
            return self.done(function (result) {
                if (typeof onFulfilled === 'function') {
                    try {
                        return resolve(onFulfilled(result));
                    } catch (ex) {
                        return reject(ex);
                    }
                } else {
                    return resolve(result);
                }
            }, function (error) {
                if (typeof onRejected === 'function') {
                    try {
                        return resolve(onRejected(error));
                    } catch (ex) {
                        return reject(ex);
                    }
                } else {
                    return reject(error);
                }
            });
        });
    }

    /**
     * Check if a value is a Promise and, if it is,
     * return the `then` method of that promise.
     *
     * @param {Promise|*} value
     * @return {Function|Null}
     */
    function getThen(value) {
        let t = typeof value;
        if (value && (t === 'object' || t === 'function')) {
            let then = value.then;
            if (typeof then === 'function') {
                return then;
            }
        }
        return null;
    }

    /**
     * Take a potentially misbehaving resolver function and make sure
     * onFulfilled and onRejected are only called once.
     *
     * Makes no guarantees about asynchrony.
     *
     * @param {Function} fn A resolver function that may not be trusted
     * @param {Function} onFulfilled
     * @param {Function} onRejected
     */
    function doResolve(fn, onFulfilled, onRejected) {
        let done = false;
        try {
            fn(function (value) {
                if (done) return
                done = true
                onFulfilled(value)
            }, function (reason) {
                if (done) return
                done = true
                onRejected(reason)
            })
        } catch (ex) {
            if (done) return
            done = true
            onRejected(ex)
        }
    }

    doResolve(fn, resolve, reject);
}