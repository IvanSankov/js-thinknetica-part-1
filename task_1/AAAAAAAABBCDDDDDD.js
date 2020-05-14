// алгоритм кодирования идентификатора

const radix = 16;

let timestamp = 1589376791;
let claster = 12;
let type = 2;
let user_id = 7823;

let timestamp_string = timestamp.toString(radix);
let type_string = type.toString(radix);

let claster_string = claster.toString(radix);
if (claster_string.length === 1) {
    claster_string = `0${claster_string}`;
}

let user_id_string = user_id.toString(radix);
if (user_id_string.length < 6) {
    for (let i = 0; i < 6 - user_id_string.length; i++) {
        user_id_string = `0${user_id_string}`;
    }
}


let id = timestamp_string + claster_string + type_string + user_id_string;

console.log(id);