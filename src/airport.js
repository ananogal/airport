function Airport(){
	this.planes = [];
	this.controlTower = new ControlTower(this);
};

function Plane(){};

function Weather(){

};

Airport.prototype.land = function(plane) {
	if(this._isNotFull())
	{
		this.planes.push(plane);
		return plane;
	}
	return null;
};

Airport.prototype.takeoff = function(plane) {
	if(this.controlTower.isLanded(plane))
		return this.controlTower.clearToTakeOff(plane);
};

Airport.prototype.isFull = function() {
	return this.planes.length === 40
};

Airport.prototype._isNotFull = function(first_argument) {
	return !this.isFull();
};


