module.exports = [
	{
		title: "Stuffed Chard Leaves",
		portions: 6,
		totalTimeInMinutes: 60,
		ingredients: [
			{ingredient: "onion", quantity: 1, measurement: null, qualifier: "chopped"},
			{ingredient: "oil", quantity: 1, measurement: "tablespoon", qualifier: null},
			{ingredient: "brown rice", quantity: 2.5, measurement: "cups", qualifier: "cooked"},
			{ingredient: "cottage cheese", quantity: 1.5, measurement: "cups", qualifier: null},
			{ingredient: "egg", quantity: 1, measurement: null, qualifier: "beaten"},
			{ingredient: "parsley", quantity: .5, measurement: "cup", qualifier: "chopped"},
			{ingredient: "raisins", quantity: .75, measurement: "cup", qualifier: null},
			{ingredient: "dill", quantity: 1, measurement: "teaspoon", qualifier: null},
			{ingredient: "salt", quantity: .75, measurement: "teaspoon", qualifier: null},
			{ingredient: "swiss chard leaves", quantity: 16, measurement: "teaspoon", qualifier: "large"}
		],
		instructions: "Preheat oven to 350°F. \n Saute onion in oil. Mix all ingredients except chard. \n Wash and dry chard leaves and remove stems, including the fat part o the rib if it extends rigidly up into the leaf (select leaves that are not too 'ribby'). Place 2 tablespoons or more of filling on the underside of the leaf, a third of the way from the bottom. Fold over the sides of the leaf and roll up into a square packet. Place seam-side down in a greased casserole. Cover and bake for about 30 minutes. Alternatively, steam the rolls in a steamer basket over boiling water until the leaves are tender, about 20 minutes. Bake any extra filling and serve with stuffed leaves." 
	},
	{
		title: "Helen's Polenta with Eggplant",
		portions: 6,
		totalTimeInMinutes: 120,
		ingredients: [
			{ingredient: "onion", quantity: 1, measurement: null, qualifier: "chopped fine"},
			{ingredient: "green pepper", quantity: 1, measurement: null, qualifier: "chopped fine"},
			{ingredient: "garlic clove", quantity: 1, measurement: null, qualifier: null},
			{ingredient: "olive oil", quantity: 1, measurement: "tablespoon", qualifier: null},
			{ingredient: "tomato", quantity: 3, measurement: cups, qualifier: "chopped"},
			{ingredient: "parsley", quantity: .25, measurement: "cup", qualifier: "chopped"},
			{ingredient: "basil", quantity: 1, measurement: "teaspoon", qualifier: "dried"},
			{ingredient: "eggplant", quantity: 1.5, measurement: "pounds", qualifier: null},
			{ingredient: "mozzarella cheese", quantity: .75, measurement: "cup", qualifier: "grated"}
		],
		instructions: "Place polenta in top of a double boiler with 4 cups of boiling water and 1/2 teaspoon of the salt. Bring to a boil, reduce heat to low, and cook for 30 to 40 minutes, until mush is quite thick. Pack into round, straight sided containers that are, ideally, the same diameter as the eggplants. Refrigerate. \n Meanwhile, saute onion, pepper and garlic clove in oil until tender. Crush garlic with a fork. Then add Tomatoes, parsley, basil, and remaining 1 teaspoon of salt. Bring to a boil and simmer, stirring often, for 15 minutes, breaking up tomatoes as you stir. \n When polenta is chilled, slice it in 1/2 rounds. Do the same with the eggplants. Oil a 9 x 13 inch baking dish and overlap alternating slices of eggplant and polenta in a pretty, fish scale design. Or, if the eggplant is too big, layer it lasagna style. Pour tomato sauce over the whole works and sprinkle cheese on top. Cover the dish and bake in a 350°F oven for 45 minutes, or until eggplant tests done with a fork." 
	},

]


/**
Data Format
Title: STRING
Portions: conservatively estimated, INTEGER
Ingredients: Array of Tuples {

ingredient : quantity  modifier STRING OPTIONAL} ie., {"onion", 1, "chopped"}
*/