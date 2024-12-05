//Задание 1
const artist = {
    name: 'Оксана',
    age: '35',
    year: 1989,
};

getObjValueKey(artist);

function getObjValueKey(obj) {
    for (let key in obj) {
        console.log(key + ' = ' + obj[key]);
    }
}