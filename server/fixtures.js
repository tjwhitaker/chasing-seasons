if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Sun Rocket Solar Kettle',
		url: 'http://www.sunkettle.com',
		price: '60',
		description: "The sun rocket is the perfect way to heat and boil your water using only the power of the sun. It's portable, convenient, and sleek. It's tea time bitches!",
		commentsCount: 0,
		image: '/images/kettle.jpg',
		categories: 'Camp'
	});
	Posts.insert({
		title: 'Loaded Vanguard Longboard',
		url: 'www.loadedboards.com/boards/vanguard',
		price: '311',
		description: "The vanguard is one sick longboard. Loaded builds all of their boards with an unsurpassed attention to detail. The quality really shines through in the vanguard. If you are looking for a fun, flexy longboard to get you to work or school, or to shred the local hills on your free time, then this is the board for you.",
		commentsCount: 0,
		image: '/images/vanguard.jpg',
		categories: 'Street'
	});
	Posts.insert({
		title: 'Stash Waterproof Pocket Shorts',
		url: 'http://www.kickstarter.com/projects/1861072211/stash-waterproof-pocket-shorts',
		price: '80',
		description: "Never worry about forgetting things in your pocket while you're out in the water again. Stash Incorparated has developed a new waterproof pocket that will allow you to safely take your cell phone, wallet, and keys with you wherever you want to take them.",
		commentsCount: 0,
		image: '/images/stash_shorts.jpg',
		categories: 'Water'
	});
	Posts.insert({
		title: 'Airblaster Ninja Suit',
		url: 'http://store.myairblaster.com/t/category/mens/ninjasuits',
		price: '64-152',
		description: "Airblaster is revolutionizing the long underwear game with the ninja suits. The ninja suit represents the apex of function, and form. One piece design seals out snow, while the 7-piece hood allows you to regulate your temperture whilst shredding. See what it's like to feel like a ninja on the snow.",
		commentsCount: 0,
		image: '/images/ninja_suit.jpg',
		categories: 'Snow'
	});
	Posts.insert({
		title: 'Vassago Jabberwocky',
		url: 'http://www.vassagocycles.com/jabberwocky/',
		price: '500',
		description: "The Jabberwocky is one of the nicest singlespeed frames out there. Those who have used the Jabberwocky frame can attest to the quality and feel of the wet cat geometry. When it comes to singlespeed 29ers, the jabberwocky reigns supreme. Check it out!",
		commentsCount: 0,
		image: '/images/jabber.jpg',
		categories: 'Dirt'
	});
}