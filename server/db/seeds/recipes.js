exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, name: 'Teriyaki chicken', description: 'Sear the chicken thighs evenly in a pan, then flip. Add the soy sauce and brown sugar, stirring and bringing to a boil. Stir until the sauce has reduced and evenly glazes the chicken. Serve with rice, if desired! Enjoy!', ingredients: JSON.stringify(['910 g chicken thighs sliced into chunks', '1 cup sauce', '½ cup brown sugar']),  img: '/images/teriyaki-chicken.jpg', category: 'Protein' },

        { id: 2, name: 'Mac & Cheese', description: 'In a large pot, bring the milk to a boil.Add the pasta and stir constantly until the pasta is cooked, about 10 minutes. Turn off the heat, then add the cheddar. Stir until the cheese is melted and the pasta is evenly coated. Enjoy!', ingredients: JSON.stringify(['5 cups milk', '455g elbow macaroni','dry 2 cups shredded cheddar cheese']),  img: '/images/macncheese.jpg', category: 'Grains' },

        { id: 3, name: 'Eggs and chips', description: 'Cut potatoes into the shape of wedges and place in oven for 20 minutes at 200 degrees celcious until golden brown, fry 2 eggs in a frying pan until cooked, place on plate with the chips and add a tin of baked beans if desired. ', ingredients: JSON.stringify(['4 large potatoes', '2 eggs', '1 tin of baked beans']), img: '/images/eggs-and-chips.jpg', category: 'Protein' },

        { id: 4, name: 'Slow cooker pulled pork', description: 'Place roast in your slow cooker insert (fat side up) and pour root beer over roast. Cover and cook on low for approximately 6 hours, or until roast shreds easily with a fork. Drain off liquid. Remove and discard any bones or excess fat. Pull, shred or chop pork. Return to slow cooker and toss with sauce, coating evenly.', ingredients: JSON.stringify(['1 kg Boston  pork roast', '2 cans or bottles root beer', '255 g vvinegar-based barbecue sauce (or your favorite barbecue sauce)']),  img: '/images/pulled-Pork.jpg', category: 'Protein' },

        { id: 5, name: 'Sushi', description: 'Start by cooking your rice in a rice cooker until done, then get your sushi seaweed and selected filler, and simply make the sushi. Enjoy!', ingredients: JSON.stringify(['rice', 'sushi seaweed', 'selected filler capsicum or pizza']), img: '/images/sushi.jpg', category: 'Grains' },

        { id: 6, name: 'Fried rice', description: 'Add oil to a wide skillet and saute the onions until translucentLower the flame and crack 3 eggs one at a time into the skillet with the sauted onions Add salt and scramble the eggs slowly for few seconds. And once the eggs are 50 % done then immediately add the cooked and cold rice and keep mixing along with eggs. This will result in the scrambling of the eggs and also mixing it well with the rice Add pepper and finely chopped spring onions and mix well until all rice is nice and hot. Serve hot with favourite side dish or sauces...', ingredients: JSON.stringify(['Onion: 1 Medium chopped', 'Eggs: 3', 'Spring Onions with leaves; 1/3 to 1/2 cup']), img: '/images/fried-rice.JPG', category: 'Grains' },

        { id: 7, name: '2 Minute noodles', description: 'Please use the specific brand of noodles in the image provided. Then simply follow the directions on the back of the packet.', ingredients: JSON.stringify(['noodles', 'water', 'noodles boiling water']), img: '/images/noodles.jpg', category: 'Vegetables' },

        { id: 8, name: 'Apple', description: 'eat apple.', ingredients: JSON.stringify(['apple']), img: '/images/apple.jpg', category: 'Vegetables' },

        { id: 9, name: 'Carrot salad', description: 'Toss carrots,  and cabbage in a mixing bowl. Drizzle with MIDDLE EASTERN SALAD DRESSING. Divide salad on serving plates or arrange on a platter. Serve chilled.', ingredients: JSON.stringify(['carrots', 'red cabbage', 'salad dressing']), img: '/images/carrot-salad.jpg', category: 'Vegetables' },
      ])
    })
}