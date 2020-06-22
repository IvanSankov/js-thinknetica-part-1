'use strict';

class HtmlInput extends HtmlElement{
    constructor() {
        super();
        this._onInput = null;
        this._onFocus = null;
    }

    set target(value) {
        if (!(value instanceof HTMLInputElement)) {
            throw new Error('Аргумент не является объектом INPUT.');
        }

        this._target = value;
    }

    set onInput(fn) {
        if (typeof fn !== 'function') {
            throw new Error('Аргумент должен быть функцией.');
        }

        this._onInput = fn;
    }

    set onFocus(fn) {
        if (typeof fn !== 'function') {
            throw new Error('Аргумент должен быть функцией.');
        }

        this._onFocus = fn;
    }

    render() {
        super.render();

        if (this._onFocus) {
            this._target.onfocus = this._onFocus;
        }

        if (this._onInput) {
            this._target.oninput = this._onInput;
        }
    }
}