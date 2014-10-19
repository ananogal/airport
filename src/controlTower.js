function ControlTower(airport){
	this.airport = airport;
	this.posibleWeathers = ["Sunshine", "Stormy"];
	notFound = -1;
};

ControlTower.prototype.findLocationOf = function(plane) {
	return airport.planes.indexOf(plane);
};

ControlTower.prototype.isLanded = function(plane){
	return this.findLocationOf(plane) !== notFound
};

ControlTower.prototype.isNotLanded = function(plane) {
	return ! this.isLanded(plane)
};

ControlTower.prototype.clearToTakeOff = function(plane) {
	if(this._notInOperation()) return null;
	return this.airport.planes.splice(this.findLocationOf(plane), 1)[0];	
};

ControlTower.prototype.land = function(plane) {
	if(this._notInOperation()) return null;
	return this.airport.land(plane);
};

ControlTower.prototype.setWeather = function(weather) {
	if( this._findWeather(weather) !== notFound)
		this.weather = weather;
};

ControlTower.prototype._findWeather = function(weather) {
	return this.posibleWeathers.indexOf(weather);
};

ControlTower.prototype._stormyWeather = function() {
	return this.posibleWeathers[1];
};

ControlTower.prototype._notInOperation = function(){
	return this.weather === this._stormyWeather();
};
