describe('Airport', function() {

	beforeEach(function() {
		airport = new Airport();
		plane = new Plane();
	});

	it('can have planes', function() {
		expect(airport.planes).toEqual([]);
	});

	it('can aloow a plane to land', function() {
		expect(airport.land(plane)).toEqual(plane)
	});

	it('knows that a plane has landed', function() {
		airport.land(plane);
		expect(airport.planes).toEqual([plane]);
	});

	it('can allow a plane to takeoff', function() {
		expect(airport.takeoff(plane)).toEqual(plane)
	});

	it('knows that a plane tookoff', function(){
		boeing = new Plane();
		airport.land(boeing);
		airport.land(plane);
		airport.takeoff(boeing);
		expect(airport.planes).toEqual([plane]);
	});
});

// it can have planes
// it can allow a plane to land
// it can allow a plane to takeoff
// it has passangers inside
// it has a capacity
// it can transfer passengers from Airport to plane
// it can receive passengers from plane into airport