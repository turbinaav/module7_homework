class ElectricalAppliance {
    constructor(type, power) {
        this.type = type,
            this.power = power,
            this.isOn = false;
    }
    on() {
        console.log(this.type + ' is on');
        this.isOn = true;
    }
    off() {
        console.log(this.type + ' is off');
        this.isOn = false;
    }

    appliancePower() {
        console.log(`${this.type}'s power = ${this.power} watt`);
    }
}



class Kettle extends ElectricalAppliance {
    constructor(type, brand, material, power) {
        super(type, power),
            this.brand = brand,
            this.material = material,
            this.isOn = true;
    }
}

class Dishwasher extends ElectricalAppliance {
    constructor(type, brand, width, power) {
        super(type, power),
            this.brand = brand,
            this.width = width,
            this.isOn = false;
    }
}

const kettle = new Kettle('kettle', 'Bosch', 'glass', 2000);
const dishwasher = new Dishwasher('dishwasher', 'Bork', 60, 4500);

kettle.on();
kettle.appliancePower();
dishwasher.off();
dishwasher.appliancePower();

console.log(kettle);
console.log(dishwasher);
