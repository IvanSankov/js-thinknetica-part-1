'use strict';

class HtmlDiv extends HtmlElement {
    constructor() {
        super();
        this._onClick = null;
    }

    set target(value) {
        if (!(value instanceof HTMLDivElement)) {
            throw new Error('Аргумент не является объектом DIV.');
        }

        this._target = value;
    }

    set onClick(fn) {
        if (typeof fn !== 'function') {
            throw new Error('Аргумент должен быть функцией.');
        }

        this._onClick = fn;
    }

    render() {
        super.render();

        if (this._onClick) {
            this._target.onclick = this._onClick;
        }
    }
}