myApp.run(function($localStorage) {
    $localStorage.list = $localStorage.list || [
        {
            name: 'Milk 1l',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Eggs Medium 12 pack',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Fresh Basil',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Wholegrain Bread 1 pkg',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Ground Coffee 200g',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Red Wine',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Mozzarella Cheese 150g',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Orange Juice 1l',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Tomatoes',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        }
    ];
    $localStorage.cart = $localStorage.cart || [];
});