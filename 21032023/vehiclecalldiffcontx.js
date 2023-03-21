function vehicle(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	vehicle.call(this, "convertible", "petrol");
	this.brand = brand;
	console.log(`vehicle details = `, this);
}

function definePrice(price){
	vehicle.call(this, "convertible", "diesel");
	this.price = price;
	console.log(`vehicle details = `, this);
}

const newBrand = new setBrand('Brand1');
const newvehiclePrice = new definePrice(100000);