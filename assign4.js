function createObject(name, height) {
this.name = name;
this.height = height;
this.describe = function () {
return "I am "+this.name + ". " +"I am "+ this.height+"cm height";
}
}