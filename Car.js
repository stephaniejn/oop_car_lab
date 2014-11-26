function Car(make, model, year, color, seats, passengers){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  //TODO: add year, color, seats here

  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];
  this.passengers = passengers || []
 }

Car.prototype.sell = function(newOwner){
	this.newOwner = newOwner;
	this.previousOwners.push(this.owner);
	this.owner = newOwner
};

Car.prototype.paint = function(newColor){
	this.newColor = "";
	this.color = newColor
};

Car.prototype.start = function(){
	this.running = true;
};

Car.prototype.off = function(){
	this.running = false;
};

Car.prototype.driveTo = function(destination){
	this.destination = destination
	if (this.running) {
		console.log("driving to <destination>");
		return true
	}
	else{
		return false
	};
}

Car.prototype.park = function(){
	if (!this.running) {
		console.log("parked!!");
		return true
	}
	else{
		return false
	}
}

Car.prototype.pickUp = function(name){
	if((this.running) && (this.seats > this.passengers.length+1)){
		console.log("driving to 'pick up <friend>'");
		this.passengers.push(name);
		return true
	}
	else{
		return false
	}
}

Car.prototype.dropOff = function(name){
	var person = this.passengers.indexOf(name)
	if ((this.running) && (person !== -1)){
		this.passengers.splice(person, 1);
		console.log("driving to drop off <friend>")
		return true
	}
	else{
		return false
	}
}

Car.prototype.passengerCount = function(passengers){
	var people = this.passengers.length
	return(people)
}

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;