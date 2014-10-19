describe('Airport', function() {

	describe('with planes', function() {

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

		it('knows that a plane can not land', function(){
			fillUp(airport);
			expect(airport.land(plane)).toEqual(null);
		});

		it('can allow a plane to takeoff', function() {
			airport.land(plane);
			expect(airport.takeoff(plane)).toEqual(plane)
		});

		it('knows that a plane tookoff', function(){
			boeing = new Plane();
			airport.land(boeing);
			airport.land(plane);
			airport.takeoff(boeing);
			expect(airport.planes).toContain(plane);
		});

		it('should ensure that a plane has landed before taking off', function() {
			boeing = new Plane();
			airport.land(plane);
			airport.takeoff(boeing);
			expect(airport.planes.length).toEqual(1);
		});

		it('should know if its full', function(){
			fillUp(airport);
			expect(airport.isFull()).toBe(true);
		});

		it ('should know if its not full', function() {
			expect(airport.isFull()).toBe(false);
		});

		it('should not exceed its capacity', function(){
			fillUp(airport);
			airport.land(new Plane);
			expect(airport.planes.length).toEqual(40);		
		});

		fillUp = function(aiport) {
			for(var i = 0; i < 40; i++){
				airport.land(new Plane());
			}
		}
	});
});

