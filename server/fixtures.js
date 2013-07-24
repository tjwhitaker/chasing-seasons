if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Merrell Trail Glove Barefoot Running Shoe',
		url: 'http://www.amazon.com/Merrell-Trail-Glove-Running-Apollo/dp/B0085YC6WS/ref=sr_1_2?ie=UTF8&qid=1374689977&sr=8-2&keywords=trail+running+merrell',
		price: '65-110',
		description: "Barefoot shoes are all the rage now. They are super light weight, and they allow you to feel the trail much better than cushy padding running shoes. Barefoot shoes force you to utilize your calves and utilize good technique. You will become a better runner, and you will be more stoked to go run with these shoes.",
		commentsCount: 0,
		image: '',
		category: 'Dirt'
	});
	Posts.insert({
		title: 'Troy Lee Designs Fonda',
		url: 'https://www.troyleedesigns.com/products/0114-24',
		price: '350',
		description: "Troy Lee Designs are known to have the sickest dirtbike helmets in the game. They've recently put out this american bad boy. With a bold design, light weight, and advanced air flow technology, this helmet is sick.",
		commentsCount: 0,
		image: '/images/tld.jpg',
		category: 'Dirt'
	});
	Posts.insert({
		title: 'Osprey Kestrel 48 Backpack',
		url: 'http://www.amazon.com/Osprey-Packs-Kestrel-48-Backpack/dp/B006UH0V0Q/ref=pd_sim_a_3',
		price: '170',
		description: "A good backpack is essential to having a great backpacking trip. Carry 48 liters of whatever you can manage to fit.",
		commentsCount: 0,
		image: '/images/kestrel.jpg',
		category: 'Camp'
	});
	Posts.insert({
		title: 'Ray Ban RB3025 Aviators',
		url: 'http://www.amazon.com/Ray-Ban-RB3025-Aviator-Non-Polarized-Sunglasses/dp/B000GLN15O/ref=sr_1_4?ie=UTF8&qid=1374554235&sr=8-4&keywords=aviators',
		price: '90',
		description: "How else can you celebrate your top gun fantasies? With the ray ban aviator sunglasses of course. Channel your inner Tom Cruise and get sexy with these sunglasses.",
		commentsCount: 0,
		image: '/images/aviators.jpg',
		category: 'All'
	});
	Posts.insert({
		title: 'GoPro Hero 3',
		url: 'gopro.com/hd-hero3-cameras',
		price: '200-400',
		description: "The hero 3 is the latest in the GoPro line on durable sports cameras. The hero 3 comes in three flavors. These babies are worthy investments to capture any kind of extreme situation you can throw at it.",
		commentsCount: 0,
		image: '/images/gopro.jpg',
		category: 'All',
	});
	Posts.insert({ 
		title: 'Bones Ceramic Reds',
		url: 'http://bonesbearings.com/products/bearings/bones-ceramic-super-reds/',
		price: '75',
		description: 'The Bones Super Reds are some of the fastest bearings on the market. The ceramic super reds are lighter, smoother, and more durable than steel bearings. If you want the fastest smoothest ride your skateboard can get, then check out the ceramic super reds.',
		commentsCount: 0,
		image: '/images/superreds.jpg',
		category: 'Street'
	});
	Posts.insert({
		title: 'Phoenix Fly Phantom 3 Wingsuit',
		url: 'http://www.phoenix-fly.com/products/wingsuits/phoenix_fly_phantom_3',
		price: '1700',
		description: "The Phantom 3 is the best all around wingsuit on the market right now. It gives flyers total control, maneuverabillity, and speed. It's made by a company that has been making wingsuits for a very long time. All that experience has gone into crafting awesome suits that can handle it all. The Phantom 3 is the weapon of choice for the experienced wingsuit BASE jumper.",
		commentsCount: 0,
		image: '/images/phantom3.jpg',
		category: 'All'
	});
	Posts.insert({
		title: 'Steripen Adveturer',
		url: 'http://www.amazon.com/SteriPEN-Adventurer-Opti-Handheld-Purifier/dp/B003A1MURC/ref=sr_1_2?ie=UTF8&qid=1374616617&sr=8-2&keywords=steripen',
		price: '70',
		description: "The steripen helps you stay hydrated by sterilizing water. Simply gather up some water and use the steripen to kill 99.9 percent of harmful bacteria using ultraviolet light. It's good for 8,000 one liter treatments and it's extremely light weight and portable.",
		commentsCount: 0,
		image: '/images/steripen.jpg',
		category: 'Camp'
	});
	Posts.insert({
		title: 'Oakley Airwave Goggles',
		url: 'http://www.oakley.com/products/7094/27029',
		price: '600',
		description: "These goggles are the next level in goggle technology. You have a built in computer in your goggles! These goggles give you access to all sorts of data real time. See how big you really went on that backcountry kicker. Track your location and your friends locations with built in GPS.",
		commentsCount: 0,
		image: '/images/airwave.jpg',
		category: 'Snow'
	});
	Posts.insert({
		title: 'Eagles Nest Outfitters Hammock',
		url: 'http://www.amazon.com/Double-Nest-Hammock-Tomato-Khaki/dp/B003BIW6NM/ref=sr_1_3?ie=UTF8&qid=1374617007&sr=8-3&keywords=hammock+camping',
		price: '50',
		description: "Let's face it, hammocks are awesome. They are lightweight, easy to set up nearly anywhere you have trees, and there's something extremely relaxing about swinging back and forth and soaking up some beautiful scenery.",
		commentsCount: 0,
		image: '/images/hammock.jpg',
		category: 'Camp'
	});
	Posts.insert({
		title: 'La Sportiva Futuras',
		url: 'http://www.amazon.com/La-Sportiva-Futura-Rock-Climbing/dp/B0073WQ6YC',
		price: '170',
		description: "The futuras are La Sportiva's latest high performace climbing shoe. The futuras use the no-edge technology, which allows climbers to have greater sensitivity on small foot holds. The futuras excel in really steep bouldering or sport climbing. The no edge technology is a bit different than what most climbers are used to, but if you want a high performance shoe and are looking to try something new, then you won't go wrong with the futuras.",
		commentsCount: 0,
		image: '/images/futuras.jpg',
		category: 'Rock'
	});
	Posts.insert({
		title: 'Sierra Designs Mojo UFO',
		url: 'http://www.amazon.com/exec/obidos/ASIN/B00AAUMWXS',
		price: '1800',
		description: "Wow. This is one of the nicest tents money can buy. It weighs in at less than 2 pounds, and it is made out of an ultra durable synthetic material. The 26 and a half square feet of space will give you the freedom to lounge as you please. If you're looking for an ultra light, ultra strong, and ultra sexy 2 person tent, then you won't go wrong with the Mojo UFO.",
		commentsCount: 0,
		image: '/images/ufo_tent.jpg',
		category: 'Camp'
	});
	Posts.insert({
		title: 'Swami\'s Surfboards',
		url:'http://www.swamis.com/surfboards',
		price: '1250-5600',
		description: "These are some sexy surfboards. While the price is steep, the quality and finish of these boards are amazing. Whether you ride it, or hang it on your wall to admire, you won't be disappointed with Swami's.",
		commentsCount: 0,
		image: '/images/swamis.jpg',
		category: 'Water'
	});
	Posts.insert({
		title: 'Sun Rocket Solar Kettle',
		url: 'http://www.sunkettle.com',
		price: '60',
		description: "The sun rocket is the perfect way to heat and boil your water using only the power of the sun. It's portable, convenient, and sleek. It's tea time bitches!",
		commentsCount: 0,
		image: '/images/kettle.jpg',
		category: 'Camp'
	});
	Posts.insert({
		title: 'Loaded Vanguard Longboard',
		url: 'www.loadedboards.com/boards/vanguard',
		price: '311',
		description: "The vanguard is one sick longboard. Loaded builds all of their boards with an unsurpassed attention to detail. The quality really shines through in the vanguard. If you are looking for a fun, flexy longboard to get you to work or school, or to shred the local hills on your free time, then this is the board for you.",
		commentsCount: 0,
		image: '/images/vanguard.jpg',
		category: 'Street'
	});
	Posts.insert({
		title: 'Stash Waterproof Pocket Shorts',
		url: 'http://www.kickstarter.com/projects/1861072211/stash-waterproof-pocket-shorts',
		price: '80',
		description: "Never worry about forgetting things in your pocket while you're out in the water again. Stash Incorparated has developed a new waterproof pocket that will allow you to safely take your cell phone, wallet, and keys with you wherever you want to take them.",
		commentsCount: 0,
		image: '/images/stash_shorts.jpg',
		category: 'Water'
	});
	Posts.insert({
		title: 'Airblaster Ninja Suit',
		url: 'http://store.myairblaster.com/t/category/mens/ninjasuits',
		price: '64-152',
		description: "Airblaster is revolutionizing the long underwear game with the ninja suits. The ninja suit represents the apex of function, and form. One piece design seals out snow, while the 7-piece hood allows you to regulate your temperture whilst shredding. See what it's like to feel like a ninja on the snow.",
		commentsCount: 0,
		image: '/images/ninja_suit.jpg',
		category: 'Snow'
	});
	Posts.insert({
		title: 'Vassago Jabberwocky',
		url: 'http://www.vassagocycles.com/jabberwocky/',
		price: '500',
		description: "The Jabberwocky is one of the nicest singlespeed frames out there. Those who have used the Jabberwocky frame can attest to the quality and feel of the wet cat geometry. When it comes to singlespeed 29ers, the jabberwocky reigns supreme. Check it out!",
		commentsCount: 0,
		image: '/images/jabber.jpg',
		category: 'Dirt'
	});
}