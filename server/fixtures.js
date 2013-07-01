if (Posts.find().count() === 0) {
    var cats = ['Air', 'Dirt', 'Mountain', 'Snow', 'Street', 'Water'];
    for (i=0; i < 20; i++) {
        Posts.insert({
            title: 'Test Post #' + i,
            url: 'http://www.tim-whitaker.com',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero tortor, consequat vel felis sed, iaculis tincidunt sem. Phasellus hendrerit elementum luctus. Mauris fringilla pharetra fringilla. Nam lacus risus, tempor eu aliquet sed, mattis et metus. Aliquam non est aliquet nisi sollicitudin fringilla. Sed condimentum ornare massa sit amet dictum. Morbi volutpat mi sed justo eleifend, pretium placerat dui accumsan. Nullam tristique nisi eu turpis iaculis commodo. Phasellus eget ante id enim iaculis luctus quis eget tellus. Nunc faucibus pellentesque accumsan. Proin magna nulla, congue a nulla nec, sagittis facilisis orci. Curabitur eget consectetur dui.",
            price: Math.round(Random.fraction()*100),
            commentsCount: 0,
            image: '/fixtureImages/' + i%10 + '.jpg',
            categories: cats[Math.floor(Math.random()*cats.length)]
        });
    }
}
if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
        username: 'tim',
        email: 'tmwhtkr@gmail.com',
        password: 'pass',
        profile: {},
        isAdmin: true
    });
}
