'use strict';

/* Моя реализация */

class CustomPromise {
    constructor(callback) {
        this._state = 'pending';
        this._success = [];
        this._error = [];
        this._currentValue = undefined;
        this._child = [];

        if (callback) {
            setTimeout(() => {
                callback(this._resolve.bind(this), this._reject.bind(this));
            }, 0);
        }
    }

    then(onSuccess, onError) {
        const newPromise = new CustomPromise();

        switch (this._state) {
            case "pending":
                if (onSuccess) {
                    newPromise._success.push(onSuccess);
                }
                if (onError) {
                    newPromise._error.push(onError);
                }

                this._child.push(newPromise);
                break;
            case 'fulfilled':
                if (typeof onSuccess !== 'function') {
                    return;
                }

                newPromise._state = 'fulfilled';
                newPromise._currentValue = onSuccess(this._currentValue);
                break;
            case 'rejected':
                if (typeof onError !== 'function') {
                    return;
                }

                newPromise._state = 'rejected';
                newPromise._currentValue = onError(this._currentValue);
                break;
        }

        return newPromise;
    }

    catch(onError) {
        return this.then(null, onError);
    }

    _resolve(value) {
        this._currentValue = value;
        this._state = 'fulfilled';

        this._success.forEach((fn) => this._currentValue = fn(this._currentValue));
        this._child.forEach(child => child._resolve(this._currentValue));

        this._child = null;
        this._success = null;
    }

    _reject(error) {
        this._currentValue = reason;
        this._state = 'rejected';

        this._error.forEach((fn) => this._currentValue = fn(this._currentValue));
        this._child.forEach(child => child._reject(this._currentValue));

        this._child = null;
        this._error = null;
    }

    static resolve(value) {
        const promise = new CustomPromise();
        promise._resolve(value);

        return promise;
    }

    static reject(reason) {
        const promise = new CustomPromise();
        promise._reject(reason);

        return promise;
    }
}