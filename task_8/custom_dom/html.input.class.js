'use strict';

class HtmlInput extends HtmlElement{
    constructor() {
        super();
    }

    set target(value) {
        if (!(value instanceof HTMLInputElement)) {
            throw new Error('Аргумент не является объектом INPUT.');
        }

        this._target = value;
    }

    set onInput(fn) {
        this._target.oninput = fn;
    }

    set onFocus(fn) {
        this._target.onfocus = fn;
    }
}