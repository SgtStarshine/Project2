
module.exports = (app) => {

	app.get('/', (req, res) => {
		// res.sendFile(path.join(__dirname, 'home.html'));
		res.sendFile('home.html', { root: './app/public' });
	});

	app.get('/game', (req,res) => {
		// res.sendFile(path.join(__dirname, 'game.html'));
		res.sendFile('game.html', { root: './app/public' });
	})

	app.get('/logic.js', (req,res) => {
		// res.sendFile(path.join(__dirname, 'game.html'));
		res.sendFile('logic.js', { root: './' });
	})
};

