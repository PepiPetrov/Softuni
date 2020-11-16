class Vehicle{
    constructor(type,model,parts,fuel){
          this.type=type
          this.model=model
          this.parts=parts
          this.fuel=fuel
          parts.quality=parts.engine*parts.power
    }
    drive(num){
       this.fuel-=Number(num)
    }
}
let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('Reno', 'Scenic', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
console.log(vehicle.type)
console.log(vehicle.model)
console.log(vehicle.parts);
console.log(Vehicle)