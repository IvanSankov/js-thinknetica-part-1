'use strict';

class HtmlElement {
    constructor() {
        this._target = null;
        this._template = '';
        this._variables = '';
        this._styles = {};
    }

    set target(value) {
        if (!(value instanceof HTMLElement)) {
            throw new Error('Аргумент не является объектом DOM.');
        }

        this._target = value;
    }

    set template(value) {
        if (!StringHelper.isString(value)) {
            throw new Error('Аргумент должен быть строкой');
        }

        this._template = value;
    }

    set variables(data) {
        if (typeof data === 'object') {
            this._variables = data;
            return;
        }

        if (StringHelper.isString(data)) {
            this._variables = data;
            return;
        }

        if (typeof data === 'function') {
            const newData = data();
            if (typeof data === 'object' || StringHelper.isString(data)) {
                this._variables = newData;
                return;
            }
        }

        throw new Error('Аргумент должен быть объектом, строкой, либо функцией, возвращающей строку или объект.');
    }

    set styles(data) {
        if (typeof data !== 'object') {
            throw new Error('Аргумент должен быть объектом');
        }

        this._styles = data;
    }

    render() {
        if (!this._target) {
            throw new Error('Необходимо определить DOM element, в который будет произведена вставка.');
        }

        let template = this._template;
        if (StringHelper.isString(this._variables)) {
            template = template.replace(/%%[a-z]+%%/gi, this._variables);
        } else {
            for (const property in this._variables) {
                const regex = new RegExp(`%%${property}%%`, 'gi');
                template = template.replace(regex, this._variables[property]);
            }
        }

        this._render(template);
    }

    unrender() {
        this._unrender();
    }

    _render(template) {
        for (const style in this._styles) {
            this._target.style[style] = this._styles[style];
        }

        this._target.innerHTML = template;
    }

    _unrender() {
        this._target.remove();
    }
}