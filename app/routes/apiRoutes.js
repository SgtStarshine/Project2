const events = require('../data/events');

module.exports = (app) => {
	app.get('/api/events', (req, res) => {
		res.json(events);
	})

	app.post('/api/events', (req, res) => {
		events.push(req.body);
	})
};
