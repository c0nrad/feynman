test:
	ts-mocha lib/*.test.ts

particles:
	@python scripts/particles_baryons.py 
	@python scripts/particles_mesons.py