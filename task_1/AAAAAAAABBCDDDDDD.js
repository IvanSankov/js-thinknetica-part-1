// алгоритм кодирования идентификатора

const radix = 16;

let timestamp = 1589376791;
let claster = 12;
let type = 2;
let user_id = 7823;

let id = timestamp.toString(radix) + claster.toString(radix) + type.toString(radix) + user_id.toString(radix);

console.log(id);