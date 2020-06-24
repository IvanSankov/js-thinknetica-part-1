'use strict';

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

    /**
     * Метод, принимающий функцию обработкик и функции ошибки, модифицирует объект, который вызывал эту функцию
     * и возвращает его.
     *
     * @param {function} onSuccess
     * @param {function} onError
     * @returns {CustomPromise}
     */
    then(onSuccess, onError) {
        return this._then(onSuccess, onError, this);
    }

    /**
     * Метод, принимающий функцию обработкик и функции ошибки, клонирует объект, который вызывал эту функцию
     * и возвращает его.
     *
     * @param {function} onSuccess
     * @param {function} onError
     * @returns {CustomPromise}
     */
    nthen(onSuccess, onError) {
        return this._then(onSuccess, onError, this._clone());
    }

    /**
     * Метод принимающий обработчик ошибки, модифицирует объект, который вызывал эту функцию
     * и возвращает его.
     *
     * @param {function} rejectReason
     * @returns {CustomPromise}
     */
    catch(rejectReason) {
        return this.then(null, rejectReason);
    }

    /**
     * Метод, принимающий функцию обработкик ошибки, клонирует объект, который вызывал эту функцию
     * и возвращает его.
     *
     * @param {function} rejectReason
     * @returns {CustomPromise}
     */
    ncatch(rejectReason) {
        return this.nthen(null, rejectReason);
    }

    /**
     * Метод, реализующий метод Promise.than для данного this
     *
     * @param {function} onSuccess
     * @param {function} onError
     * @param {CustomPromise} _this
     * @returns {CustomPromise}
     * @private
     */
    _then(onSuccess, onError, _this) {
        const handler = _this._handlerByState();
        handler(onSuccess, onError);

        return _this;
    }

    /**
     * Метод, который вызывается в случае успешного исполнение промиса
     *
     * @param {*} value
     * @private
     */
    _resolve(value) {
        this._currentValue = value;
        this._state = 'fulfilled';

        this._child.forEach(child => child._resolve(value));

        this._success.forEach((fn) => this._currentValue = fn(this._currentValue));
    }

    /**
     * Метод, который вызывается в случае отклонения
     *
     * @param {*} reason
     * @private
     */
    _reject(reason) {
        this._currentValue = reason;
        this._state = 'rejected';

        this._child.forEach(child => child._reject(reason));

        this._error.forEach((fn) => this._currentValue = fn(this._currentValue));
    }

    /**
     * Метод, возвращающий функцию обработчик для одного из состояний: "pending", "fulfilled", "rejected"
     *
     * @returns {function}
     * @private
     */
    _handlerByState() {
        const handlers = {
            pending: this._pending.bind(this),
            fulfilled: this._fulfilled.bind(this),
            rejected: this._rejected.bind(this),
        }

        return handlers[this._state];
    }

    /**
     * Метод обработчик, когда статус промиса "pending"
     *
     * @param {function} onSuccess
     * @param {function} onError
     * @private
     */
    _pending(onSuccess, onError) {
        if (onSuccess) {
            this._success.push(onSuccess);
        }

        if (onError) {
            this._error.push(onError);
        }
    }

    /**
     * Метод обработчик, когда статус промиса "fulfilled"
     *
     * @param {function} onSuccess
     * @param {function} onError
     * @private
     */
    _fulfilled(onSuccess, onError) {
        if (typeof onSuccess !== 'function') {
            return;
        }

        this._currentValue = onSuccess(this._currentValue);
    }

    /**
     * Метод обработчик, когда статус промиса "rejected"
     *
     * @param {function} onSuccess
     * @param {function} onError
     * @private
     */
    _rejected(onSuccess, onError) {
        if (typeof onError !== 'function') {
            return;
        }

        this._currentValue = onError(this._currentValue);
    }

    /**
     * Метод, клонирующий текущий объект. (ну клонирование это конечно сильно сказано, вдруг там this._currentValue
     * является объектом каким-нибудь или нечто более хитрым, тогда конечно никакого клонирования нет)
     *
     * @returns {CustomPromise}
     * @private
     */
    _clone() {
        const clone = new CustomPromise();
        clone._success = this._success.map(fn => fn);
        clone._error = this._error.map(fn => fn);
        clone._state = this._state;
        clone._currentValue = this._currentValue;

        if (this._state === 'pending') {
            this._child.push(clone);
        }

        return clone;
    }

    /**
     * Метод, реализующий Promise.resolve
     *
     * @param {*} value
     * @returns {CustomPromise}
     */
    static resolve(value) {
        const promise = new CustomPromise();
        promise._resolve(value);

        return promise;
    }

    /**
     * Метод, реализующий Promise.reject
     *
     * @param {*} reason
     * @returns {CustomPromise}
     */
    static reject(reason) {
        const promise = new CustomPromise();
        promise._reject(reason);

        return promise;
    }
}