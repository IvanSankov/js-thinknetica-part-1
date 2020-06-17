'use strict';

/*

* 1. У меня есть дублирования в коде, когда я инициализирую переменные, например для корбалей или верфей, это нормально?
* Или же можно как-то сделать, чтобы в прототип прокидывались переданные значения, например из Boat, и там была единая
* функция, которая уже устанавливает это?
* 2. Я создаю объект прототипа, например, ship, сразу в файле ship.class, а потом добавляю его уже в классы, после их
* определения, это нормально? или нужно как то по другому было делать?
* 3. Я правильно понимаю, что в прототипах у нас должны/желательно быть только функции? Ведь свойства у прототипа только
* на чтение, значит в них смысла нет? А все свойства, которые я использую внутри методов, я предпологаю, как будто бы
* они уже есть.
* 4. Нормально, что у меня так много геттеров и сеттеров для свойств? Мне кажется, часть из них наверное надо сделать
* как дескрипторы, ну чтобы они были read-only но я не придумал как это сделать, хотя сомнения у меня есть, что так как
* я сделал немного не то...
* 5. Да, еще в Ship метод getParams я сделал бросающим исключения, чтобы любой, кто наследуюется от этого метода,
* обятельно его реализовывал, получилось нечто вроде интерфейса, это правильно/нормально? Или же как-то по другому это
* делается?
* 6. А как лучше тестировать прототипы? ну я хочу сказать, что в текущем задании достаточно только прототипы фактически
* покрыть тестами и все дочерние классы автоматически будут ими покрыты и писать там ничего не нужно, да?
*
* */