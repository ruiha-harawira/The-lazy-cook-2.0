exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function () {
      // Inserts seed entries

      return knex('recipes').insert([
        {
          id: 1,
          name: 'Teriyaki chicken',
          description:
            'Sear the chicken thighs evenly in a pan, then flip. Add the soy sauce and brown sugar, stirring and bringing to a boil. Stir until the sauce has reduced and evenly glazes the chicken. Enjoy!',
          ingredient1: '910 g chicken thighs sliced into chunks',

          ingredient2: '1 cup sauce',

          ingredient3: '½ cup brown sugar',

          img: '/images/teriyaki-chicken-3.jpg',
          category: 'Protein',
        },

        {
          id: 2,
          name: 'Mac & Cheese',
          description:
            'In a large pot, bring the milk to a boil. Add the pasta and stir constantly until the pasta is cooked, about 10 minutes. Turn off the heat, then add the cheddar. Stir until the cheese is melted and the pasta is evenly coated. Enjoy!',
          ingredient1: '5 cups milk',
          ingredient2: '455g elbow macaroni',
          ingredient3: 'dry 2 cups shredded cheddar cheese',

          img: '/images/macncheese.jpg',
          category: 'Grains',
        },

        {
          id: 3,
          name: 'Eggs and chips',
          description:
            'Cut potatoes into the shape of wedges and place in oven for 20 minutes at 200 degrees celcious until golden brown, fry 2 eggs in a frying pan until cooked, place on plate with the chips and add a tin of baked beans if desired. Enjoy! ',
          ingredient1: '4 large potatoes',
          ingredient2: '2 eggs',
          ingredient3: '1 tin of baked beans',

          img: '/images/bestEggChips.jpg',
          category: 'Protein',
        },

        {
          id: 4,
          name: 'Slow cooker pulled pork',
          description:
            'Place roast in your slow cooker insert (fat side up) and pour root beer over roast. Cover and cook on low for approximately 6 hours, or until roast shreds easily with a fork. Drain off liquid. Remove and discard any bones or excess fat. Pull, shred or chop pork. Return to slow cooker and toss with sauce, coating evenly.',
          ingredient1: '1 kg Boston  pork roast',
          ingredient2: '2 cans or bottles root beer',
          ingredient3:
            '255 g vinegar-based barbecue sauce (or your favorite barbecue sauce)',

          img: '/images/pulled-Pork.jpg',
          category: 'Protein',
        },

        {
          id: 5,
          name: 'Sushi',
          description:
            'Start by cooking your rice in a rice cooker until done, then get your sushi seaweed and selected filler, and simply make the sushi. Enjoy!',
          ingredient1: 'rice',
          ingredient2: 'sushi seaweed',
          ingredient3: 'selected filler capsicum or pizza',
          img: '/images/sushi.jpg',
          category: 'Grains',
        },

        {
          id: 6,
          name: 'Fried rice',
          description:
            'Add oil to a wide skillet and saute the onions until translucent. Lower the flame and crack 3 eggs one at a time into the skillet with the sauted onions Add salt and scramble the eggs slowly for few seconds. And once the eggs are 50 % done then immediately add the cooked and cold rice and keep mixing along with eggs. This will result in the scrambling of the eggs and also mixing it well with the rice Add pepper and finely chopped spring onions and mix well until all rice is nice and hot. Serve hot. Enjoy!',
          ingredient1: 'Onion: 1 Medium chopped',
          ingredient2: 'Eggs: 3',
          ingredient3: 'Spring Onions with leaves; 1/3 to 1/2 cup',
          img: '/images/fried-rice.JPG',
          category: 'Grains',
        },

        {
          id: 7,
          name: '2 Minute noodles',
          description:
            'Please use the specific brand of noodles in the image provided. Then simply follow the directions on the back of the packet.',
          ingredient1: 'noodles',
          ingredient2: 'water',
          ingredient3: 'noodles boiling water',
          img: '/images/noodles.jpg',
          category: 'Vegetables',
        },

        {
          id: 8,
          name: 'Apple',
          description: 'eat apple.',
          ingredient1: 'apple',
          img: '/images/apple2.jpg',
          category: 'Vegetables',
        },

        {
          id: 9,
          name: 'Carrot salad',
          description:
            'Toss carrots, and cabbage in a mixing bowl. Drizzle with MIDDLE EASTERN SALAD DRESSING. Divide salad on serving plates or arrange on a platter. Serve chilled.',
          ingredient1: 'carrots',
          ingredient2: 'red cabbage',
          ingredient3: 'salad dressing',

          img: '/images/carrot2.jpg',
          category: 'Vegetables',
        },

        {
          id: 10,
          name: 'Burger',
          description:
            'Start by cooking the patty in a frying pan until a preffered amount of cooking has been done, then place the patty inside the bun with ketchup inside. Enjoy!',
          ingredient1: 'ketchup',
          ingredient2: 'burger bun',
          ingredient3: 'burger',
          img: '/images/VeggieBurger.jpg',
          category: 'Protein',
        },

        {
          id: 11,
          name: 'Broiled Thai Sweet Chili Salmon',
          description:
            'Fristly cook the salmon in frying pan at some sort of heat, then add thai sweet chile sauce and green onions ontop. Enjoy!',
          ingredient1: '6 x 6 oz wild salmon fillets skin on or off',
          ingredient2: '1/2 cup + 2 tbsp Thai sweet chili sauce',
          ingredient3: '2 – 3 tbsp green onions finely chopped',
          img: '/images/salmon.jpg',
          category: 'Protein',
        },
        {
          id: 12,
          name: 'Curried beans on toast',
          description:
            'Place one tin of beans in the microwave for 2 minutes, and 2 slices of toast in the breader, when the tin starts to spark in the microwave wait a further 20 seconds then remove the beans and empty into a bowl, and add 1 tablespoon of curry powder and mix well, then butter and cut the toast into your preffered size and place on a plate, then covee the toast with the beans. Enjoy!',
          ingredient1: '1 tin of baked beans',
          ingredient2: 'curry powder',
          ingredient3: '2 slices of bread',
          img: '/images/beansOnToast.jpeg',
          category: 'Protein',
        },

        {
          id: 13,
          name: 'Corn on the Cob',
          description:
            'Preheat oven to 375ºF (190ºC). Coat each ear of corn in a thin layer of butter and roll in the parmesan cheese to coat. Place corn in a square baking dish and sprinkle with salt and pepper. Bake for 25 minutes. Enjoy!',
          ingredient1: '6 half ears corn, cleaned, husked',
          ingredient2: '2 tablespoons butter, softened',
          ingredient3: '½ cup parmesan cheese(55 g), grated',

          img: '/images/corn.jpg',
          category: 'Vegetables',
        },

        {
          id: 14,
          name: 'Cereal Treat',
          description:
            'Prepare a square glass baking dish with cooking spray. Melt marshmallows over medium heat in a nonstick pan. Stir every 30 seconds to avoid burning. (TIP! spray your spatula with nonstick cooking spray to make stirring easier.) Once the marshmallows are melted, add in the rice cereal and chocolates. Stir until fully combined. Stir until fully combined. Scoop the mixture into the sprayed baking dish and flatten with a spatula. Cool for 30 minutes, then cut into squares. Enjoy!',
          ingredient1: '1 cup chocolate candy(175 g)',
          ingredient2: '2 ½ cups marshmallow(140 g)',
          ingredient3: '3 cups puffed rice cereal(90 g)',

          img: '/images/riceKrispie.jpg',
          category: 'Grains',
        },

        {
          id: 15,
          name: 'Trail Mix!',
          description:
            'Mix all the grains together in a single bag, then shake! Enjoy!',
          ingredient1: 'dried corn',
          ingredient2: 'sunflower seeds',
          ingredient3: 'wheat grains',
          img: '/images/chickenGrains.jpg',
          category: 'Grains',
        },

        {
          id: 16,
          name: 'Sun-Dried Tomato Shrimp and Rice',
          description:
            'In a large skillet over medium heat, heat oil. And stir until fragrant, 30 seconds. Add shrimp and cook, stirring occasionally, until shrimp is opaque throughout, 3 minutes. Add rice and cook, stirring, until thoroughly mixed and heated through.',
          ingredient1: '¼ cup sun-dried tomato pesto',
          ingredient2: '8 ounces medium shrimp, peeled, deveined, tails removed',
          ingredient3: '2 cups cooked brown rice',
          img: '/images/shrimpRice.jpg',
          category: 'Grains',
        },

        {
          id: 17,
          name: 'Cheesy Garlic Broccoli',
          description:
            'Preheat oven to 375ºF (190ºC). Spread out broccoli in a medium rectangular casserole dish. Stir the garlic and cheddar cheese together in a separate bowl. Sprinkle the cheese evenly over broccoli and add salt and pepper to taste. Bake for 25 minutes. Enjoy!',
          ingredient1: '3 crowns broccoli',
          ingredient2: '1 ¾ cups shredded cheddar cheese(175 g)',
          ingredient3: '3 cloves garlic, crushed',

          img: '/images/brocolli.jpg',
          category: 'Vegetables',
        },

        {
          id: 18,
          name: 'Pizza Frittata',
          description:
            'Heat oven to 350°. In a large skillet over medium heat, heat oil. Add eggs and cherry tomatoes. Season with salt and pepper. Transfer to oven and bake 30 to 35 minutes, until cooked through and lightly browned on top. (A cooked frittata will spring back when you press in the center.) Top with mozzarella in the last 5 minutes of cooking. Cool slightly before serving.',
          ingredient1: '8 large eggs, beaten',
          ingredient2: '1 pint cherry tomatoe',
          ingredient3: '3 ounces shredded mozzarella',
          img: '/images/pizza.jpg',
          category: 'Vegetables',
        },
      ])
    })
}
