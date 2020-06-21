'use strict';

const p = document.getElementById('js-html-element');
const div = document.getElementById('js-html-div-element');
const input = document.getElementById('js-html-input-element');

/* ------------------------------------------------------ */

const htmlElement = new HtmlElement();
htmlElement.target = p;
htmlElement.template = '<span>%%firstName%% %%secondName%%</span>';
htmlElement.variables = {
    firstName: 'Ivan',
    secondName: 'San',
};
htmlElement.styles = {
    color: 'red'
};
htmlElement.render();

/* ------------------------------------------------------ */

function onClick(event) {
    console.log('click div');
}

const htmlDivElement = new HtmlDiv();
htmlDivElement.target = div;
htmlDivElement.template = '<ul><li>%%first%%</li><li>%%second%%</li></ul>';
htmlDivElement.variables = 'заменить каждое вхождение';
htmlDivElement.styles = {
    background: 'yellow',
};

htmlDivElement.onClick = onClick;
htmlDivElement.render();

/* ------------------------------------------------------ */

function onFocus(event) {
    console.log('focus input');
}

function onInput(event) {
    console.log('input input : D');
}

const htmlInputElement = new HtmlInput();
htmlInputElement.target = input;
htmlInputElement.onFocus = onFocus;
htmlInputElement.onInput = onInput;
htmlInputElement.render();
