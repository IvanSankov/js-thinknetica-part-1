'use strict';

/*
* 1. Не совсем понял требование "изменения должны применяться на лету, т.е. если мы меняем значение цвета,
* оно сразу же должно примениться", точнее для цвета то я понял, а вот если у нас поменялся target или template?
* Я так понимаю, надо просто в каждом сеттер вызывать _render? Тогда не совсем понимаю, зачем нам функция render, если
* будет все на лету меняться? Именно по этому сделал так, что сначала все настраивается, а потом вызываешь render для
* полной отрисовки.
*
*
*
*
*
*
* */