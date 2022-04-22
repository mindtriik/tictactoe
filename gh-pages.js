import ghpages from 'gh-pages';


ghpages.publish(
	'dist', // path to public directory
	{
		branch: '4-gh-pages',
		repo: 'https://github.com/mindtriik/tictactoe.git', // Update to point to your repository
		user: {
			name: 'Donald JB', // update to use your name
			email: 'donald.jb@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
