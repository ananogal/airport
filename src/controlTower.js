function ControlTower(airport){
	this.airport = airport;
};

ControlTower.prototype.findLocationOf = function(plane) {
	return airport.planes.indexOf(plane);
};

ControlTower.prototype.isLanded = function(plane){
	var notFound = -1;
	return this.findLocationOf(plane) !== notFound
};

ControlTower.prototype.isNotLanded = function(plane) {
	return ! this.isLanded(plane)
};

ControlTower.prototype.clearManyPlanesToTakeOff = function(plane, numberOfPlanes) {
	return this.airport.planes.splice(this.findLocationOf(plane), numberOfPlanes);
};

ControlTower.prototype.clearToTakeOff = function(plane) {
	return this.clearManyPlanesToTakeOff(plane, 1)[0];	
};