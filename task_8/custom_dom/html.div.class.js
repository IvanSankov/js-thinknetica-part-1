'use strict';

class HtmlDiv extends HtmlElement {
    constructor() {
        super();
    }

    set target(value) {
        if (!(value instanceof HTMLDivElement)) {
            throw new Error('Аргумент не является объектом DIV.');
        }

        this._target = value;
    }

    set onClick(fn) {
        this._target.onclick = fn;
    }
}