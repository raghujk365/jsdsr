function vehicle(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	vehicle.apply(this, ["convertible", "petrol"]); //Syntax with array literal
	this.brand = brand;
	console.log(`vehicle details = `, this);
}

function definePrice(price){
	vehicle.apply(this, new Array("convertible", "diesel")); //Syntax with array object construction
	this.price = price;
	console.log(`vehicle details = `, this);
}

const newBrand = new setBrand('Brand1');
const newvehiclePrice = new definePrice(100000)