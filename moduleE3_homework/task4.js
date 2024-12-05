function electricalDevace(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
} // метод, который определяет прибор как включенный в розетку

electricalDevace.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
}

electricalDevace.prototype.getPowerUsed = function() {
    return this.isPlugged ? this.power : 0;
}

const lamp = new electricalDevace('lamp', 55);
const tv = new electricalDevace('tv', 1500);

console.log(lamp.getPowerUsed() + tv.getPowerUsed());

lamp.plugIn();
console.log(lamp.getPowerUsed() + tv.getPowerUsed());

tv.plugIn();
console.log(lamp.getPowerUsed() + tv.getPowerUsed());