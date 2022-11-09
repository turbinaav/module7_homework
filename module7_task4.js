function ElectricalAppliance(type, power) {
    this.type = type,
        this.power = power,
        this.isOn = false;
}

ElectricalAppliance.prototype.on = function () {
    console.log(this.type + ' is on');
    this.isOn = true;
}

ElectricalAppliance.prototype.off = function () {
    console.log(this.type + ' is off');
    this.isOn = false;
}

ElectricalAppliance.prototype.appliancePower = function () {
    console.log(`${this.type}'s power = ${this.power} watt`);
}

function Kettle(type, brand, material, power) {
    this.type = type,
        this.brand = brand,
        this.material = material,
        this.power = power,
        this.isOn = true;
}

Kettle.prototype = new ElectricalAppliance();

function Dishwasher(type, brand, width, power) {
    this.type = type,
        this.brand = brand,
        this.width = width,
        this.power = power,
        this.isOn = false;
}

Dishwasher.prototype = new ElectricalAppliance();

const kettle = new Kettle('kettle', 'Bosch', 'glass', 2000);
const dishwasher = new Dishwasher('dishwasher', 'Bork', 60, 4500);

kettle.on();
kettle.appliancePower();
dishwasher.off();
dishwasher.appliancePower();

console.log(kettle);
console.log(dishwasher);
