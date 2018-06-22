function Airplane(model, seatingCapacity, maximumSpeed) {
	this.model = model;
	this.seatingCapacity = seatingCapacity;
	this.maximumSpeed = maximumSpeed;
	this.print=function () {
		return this.model +" "+ this.seatingCapacity +" "+ this.maximumSpeed;
	}
}
var obj1 = new Airplane("Airplane1", 100,"750");
console.log(obj1.print());

var obj2 = new Airplane("Airplane2", 110,"730");
console.log(obj2.print());
var obj3 = new Airplane("Airplane3", 120,"720");
console.log(obj3.print());

delete obj1.maximumSpeed;
delete obj2.maximumSpeed;
delete obj3.maximumSpeed;
obj1.averageSpeed = 600;
obj2.averageSpeed = 600;
obj3.averageSpeed = 600;
console.log(obj1.print());