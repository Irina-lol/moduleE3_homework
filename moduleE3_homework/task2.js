//Задание 2
const artist = {
    name: 'Оксана',
    age: '35',
    year: 1989,
};

console.log(checkAvailability(artist, 'year'));

function checkAvailability(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}