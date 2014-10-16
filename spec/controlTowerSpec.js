describe('ControlTower', function() {
	beforeEach(function(){
		plane = new Plane();
		airport = new Airport();
		control = new ControlTower(airport);
	});

	it('should know the location of a plane', function() {
		airport.land(plane);
		expect(control.findLocationOf(plane)).toBe(0);
	});

	it('should know if a plane has landed', function(){
		airport.land(plane);
		expect(control.isLanded(plane)).toBe(true);
	});

	it('should know if a plane has not landed', function() {
		expect(control.isNotLanded(plane)).toBe(true);
	});

	it('should be able to clear many planes to take off', function() {
		airport.land(plane);
		airport.land(new Plane());
		airport.land(new Plane());
		airport.land(new Plane());
		expect(control.clearManyPlanesToTakeOff(plane, 3).length).toEqual(3);
	});

	it('should be able to clear a plane to takeoff', function(){
		airport.land(plane);
		expect(control.clearToTakeOff(plane)).toEqual(plane);
	});
});
