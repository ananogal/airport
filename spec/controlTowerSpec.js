describe('ControlTower', function() {
	beforeEach(function(){
		plane = new Plane();
		airport = new Airport();
		controlTower = new ControlTower(airport);
		controlTower.setWeather('Sunshine');
	});

	it('should know the location of a plane', function() {
		airport.land(plane);
		expect(controlTower.findLocationOf(plane)).toBe(0);
	});

	it('should know if a plane has landed', function(){
		airport.land(plane);
		expect(controlTower.isLanded(plane)).toBe(true);
	});

	it('should know if a plane has not landed', function() {
		expect(controlTower.isNotLanded(plane)).toBe(true);
	});

	it('should be able to clear a plane to takeoff', function(){
		airport.land(plane);
		expect(controlTower.clearToTakeOff(plane)).toEqual(plane);
	});

	it('should land a plane', function(){
		expect(controlTower.land(plane)).toEqual(plane);
	});

	it('should have SUNSHINE weather', function(){
		expect(controlTower.weather).toEqual('Sunshine');
	});

	it('should not change is weather if not in possible weathers', function(){
		controlTower.setWeather('Cloudy')
		expect(controlTower.weather).toEqual('Sunshine');
	});

	it('should not land a plane if the weather is sortmy', function() {
		controlTower.setWeather("Stormy");
		expect(controlTower.land(plane)).toEqual(null);
	});

	it('should not clear a plane to takeoff if stormy weather', function() {
		controlTower.setWeather("Stormy");
		expect(controlTower.clearToTakeOff(plane)).toEqual(null);
	})

	
});
