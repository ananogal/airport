function Airport(){
	this.planes = [];
	this.controlTower = new ControlTower(this);
};

function Plane(){
};

Airport.prototype.land = function(plane) {
	if(! this.isFull())
		this.planes.push(plane);
	return plane;
};

Airport.prototype.takeoff = function(plane) {
	if(this.controlTower.isLanded(plane))
		return this.controlTower.clearToTakeOff(plane);
};

Airport.prototype.isFull = function() {
	return this.planes.length === 40
};

