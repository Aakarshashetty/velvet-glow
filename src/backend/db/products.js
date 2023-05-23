import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Reequil Ultra Matte Dry Touch Sunscreen Gel SPF 50 PA ++++ UVA(50 g)",
    category: "Women",
    description:
      "Re'equil Ultra Matte Dry Touch Sunscreen Gel is a silicone gel based formulation with highest UVA protection of PA++++ and also offers added protection from infrared radiation. It gives a velvety dry touch with no white cast. ",
    original_price: "780",
    price: "663",
    offer: "44% OFF",
    in_stock: true,
    rating: "4.5",
    image:
      "https://images-static.nykaa.com/media/catalog/product/b/8/b8a916c8906063411147_1.jpg",
  },
  {
    _id: uuid(),
    name: "Aqualogica Glow+ Dewy Sunscreen with Papaya & Vitamin C - SPF 50 PA+++ for UVA/B",
    category: "Women",
    description:
      "It's time to Protect + Hydrate + Glow! Shield your skin from harmful sun rays while keeping it hydrated with Aqualogica Glow+ Dewy Sunscreen. ",
    original_price: "399",
    price: "379",
    offer: "20% OFF",
    in_stock: false,
    rating: "4.4",
    image:
      "https://images-static.nykaa.com/media/catalog/product/5/4/5440bc8AQUAA00000021_1.jpg",
  },
  {
    _id: uuid(),
    name: "Dr. Sheth's Ceramide & Vitamin C Sunscreen(50gm)",
    category: "Women",
    description:
      "Protecting your skin from the harmful UV rays and preventing sun damage is just one of the many benefits of the humble sunscreen. ",
    original_price: "499",
    price: "634",
    offer: "50% OFF",
    in_stock: true,
    rating: "4.5",
    image:
      "https://images-static.nykaa.com/media/catalog/product/8/f/8fb5316890618700029(1).jpg",
  },
  {
    _id: uuid(),
    name: "COSRX Advanced Snail 96 Mucin Power Essence(100ml)",
    category: "Women",
    description:
      "COSRX Advanced Snail 96 Mucin Power Essence comprises of 96% skin friendly snail secretion filtrate that is effective at repairing damaged skin, improving skin elasticity and maintaining hydration level all day long. ",
    original_price: "1699",
    price: "1450",
    offer: "30% OFF",
    in_stock: true,
    rating: "4.5",
    image:
      "https://images-static.nykaa.com/media/catalog/product/a/8/a8468fe8809416470009_2n.jpg",
  },
  {
    _id: uuid(),
    name: "Neutrogena Hydro Boost Water Gel Mini Face Moisturizer With Hyaluronic Acid For 72 Hours Hydration(15g)",
    category: "Women",
    description:
      "has a unique light-weighted fresh texture that can be instantly absorbed, proven to effectively lock in abundant hydration deep within your skin, and continuously quench your skin's thirst throughout the day. ",
    original_price: "699",
    price: "450",
    offer: "10% OFF",
    in_stock: true,
    rating: "4.4",
    image:
      "https://images-static.nykaa.com/media/catalog/product/c/d/cd0f16c4710032517839_1.jpg",
  },
  {
    _id: uuid(),
    name: "Minimalist 10% Vitamin C Serum For Face For Illuminating Skin For Beginners(30ml)",
    category: "Women",
    description:
      "Minimalist Vitamin C (Ethyl Ascorbic Acid) 10% + Acetyl Glucosamine 1% is a glow-boosting daily serum packaged with the goodness of vitamin C that brightens and tones sun damage and dull skin with dark spots. ",
    original_price: "899",
    price: "699",
    offer: "34% OFF",
    in_stock: false,
    rating: "4.4",
    image:
      "https://images-static.nykaa.com/media/catalog/product/3/2/320deadMINIM00000008n.jpg",
  },

  {
    _id: uuid(),
    name: "Bombay Shaving Company Coffee Face Wash(100gm)",
    category: "Men",
    description:
      "Do you depend on coffee to give you a jolt of energy every morning? Bombay Shaving Company Coffee Face Wash does the same for your skin! Coffee's antioxidant properties bolster your skin's natural defence, revive dull and tired skin by providing essential nutrients and promote blood circulation leading to healthy and radiant skin. ",
    original_price: "249",
    price: "199",
    offer: "15% OFF",
    in_stock: false,
    rating: "4.4",
    image:
      "https://images-static.nykaa.com/media/catalog/product/1/3/1354c538904330600461_1pr.jpg",
  },
  {
    _id: uuid(),
    name: "Nykaa SKINRX Vitamin C Illuminate + Night Moisturizer For Normal to Dry Skin(50gm)",
    category: "Men",
    description:
      "A night time moisturizer that delivers ultimate hydration, repair and replenishment to your sl=kin while you sleep. ",
    original_price: "449",
    price: "404",
    offer: "40% OFF",
    in_stock: true,
    rating: "4.5",
    image:
      "https://images-static.nykaa.com/media/catalog/product/f/5/f530b74NYKAE00000035_1.jpg",
  },
  {
    _id: uuid(),
    name: "Beardo Activated Charcoal Face Wash for Deep Pore Cleansing,| Removes Dirt & Impurities(100ml)",
    category: "Men",
    description:
      "Wash away the impurities with Beardo Charcoal facewash, that targets deep-down impurities to defend against daily buildup like dirt, oil, and impurities for a truly deep cleansed skin. ",
    original_price: "275",
    price: "234",
    offer: "24% OFF",
    in_stock: true,
    rating: "4.3	",
    image:
      "https://images-static.nykaa.com/media/catalog/product/2/b/2b799b58906084790467.jpg",
  },
  {
    _id: uuid(),
    name: "Nykaa Naturals Tea Tree & Neem Purifying & Hydrating Gel(100gm)",
    category: "Men",
    description:
      "Nykaa Naturals Hydrating Gel replenishes your skin with a boost of hydration that lasts all day long. ",
    original_price: "349",
    price: "244",
    offer: "34% OFF",
    in_stock: true,
    rating: "4.2",
    image:
      "https://images-static.nykaa.com/media/catalog/product/9/9/994a850NYKAB00000184_1.jpg",
  },
  {
    _id: uuid(),
    name: "Neutrogena Ultrasheer SPF50+ PA+++ Face Sunscreen With Helioplex For Ultralight Feel & Matte Finish(88ml)",
    category: "Men",
    description:
      "Neutrogena® Ultra Sheer Dry-Touch Sunblock SPF 50+ has Helioplex Technology which offers powerful protection against sun damage while leaving a weightlessly invisible feeling on your skin. ",
    original_price: "675",
    price: "621",
    offer: "50% OFF",
    in_stock: true,
    rating: "4.4",
    image:
      "https://images-static.nykaa.com/media/catalog/product/5/9/59f542c86800687900_1.jpg",
  },
  {
    _id: uuid(),
    name: "Minimalist SPF 50 PA ++++ Sunscreen With Multi-Vitamin For Reducing Photoaging & No White Cast(50g)",
    category: "Men",
    description:
      "Minimalist Multi Vitamin SPF 50 PA ++++ Sunscreen is a lightweight, moisturiser-meets-sunscreen. ",
    original_price: "599",
    price: "399",
    offer: "15% OFF",
    in_stock: false,
    rating: "4.4",
    image:
      "https://images-static.nykaa.com/media/catalog/product/b/2/b2ad46bMINIM00000027_2.jpg",
  },

  {
    _id: uuid(),
    name: "Cetaphil Gentle Skin Cleanser & Sun SPF 30 Light Gel Combo",
    category: "Mom & Baby",
    description:
      "Cetaphil Sun SPF 30+ Light Gel offers high broad spectrum sun protection against UVA and UVB rays for both, face and body. ",
    original_price: "1533",
    price: "1456",
    offer: "20% OFF",
    in_stock: true,
    rating: "4.3",
    image:
      "https://images-static.nykaa.com/media/catalog/product/6/9/691add7NYKBNDCTP0018_1.jpg",
  },
  {
    _id: uuid(),
    name: "Mamaearth 100% Natural Milky Soft Lip Balm For Kids, Babies For 12 Hour Moisturization(4 g)",
    category: "Mom & Baby",
    description:
      "Mamaearth 100% Natural Milky Soft Lip Balm is crafted especially for little babies. ",
    original_price: "199",
    price: "185",
    offer: "30% OFF",
    in_stock: false,
    rating: "4.4",
    image:
      "https://images-static.nykaa.com/media/catalog/product/d/0/d02944d8906087776468_1.jpg",
  },
  {
    _id: uuid(),
    name: "Sebamed Baby Shampoo, PH 5.5, Camomile, Natural Moisturiser, No Tears Formula, For Delicate Scalp(50ml)",
    category: "Mom & Baby",
    description:
      "The Sebamed Children's Shampoo gently cleans your baby's hair. Many popular shampoos for babies contain soap or other harsh chemicals. This dermatologist tested children's shampoo is specially formulated to hydrate your baby's hair and scalp, supporting healthy growth. ",
    original_price: "299",
    price: "192",
    offer: "50% OFF",
    in_stock: true,
    rating: "4.5",
    image:
      "https://images-static.nykaa.com/media/catalog/product/a/2/a2d609d4103040019479_1.jpg",
  },
  {
    _id: uuid(),
    name: "WOW Skin Science Kids Strawberry 3 in 1 Tip to Toe Wash - Shampoo + Conditioner + Body wash(300ml)",
    category: "Mom & Baby",
    description:
      "WOW Skin Science Kids 3-in-1 Strawberry Tip to Toe Wash is an all-in-one Shampoo, Conditioner & Body Wash for kids (age 3+). ",
    original_price: "399",
    price: "268",
    offer: "40% OFF",
    in_stock: true,
    rating: "4.5",
    image:
      "https://images-static.nykaa.com/media/catalog/product/1/d/1d9cb75KIDS_WASH_STRAWBERRY_1.jpg",
  },
  {
    _id: uuid(),
    name: "Johnson's Active Kids Shiny Drops Shampoo(200ml)",
    category: "Mom & Baby",
    description:
      "Johnson's shiny drops kids shampoo has an innovative formula, with a touch of silk proteins and a drop of argan oil, it boosts the hairs natural shine and help reduce frizz, leaving hair silky smooth and looking healthy. ",
    original_price: "399",
    price: "220",
    offer: "44% OFF",
    in_stock: false,
    rating: "4.4",
    image:
      "https://images-static.nykaa.com/media/catalog/product/8/9/8901012118177_shiny_drop_200ml_1.jpg",
  },
  {
    _id: uuid(),
    name: "Fixderma Shadow Kids SPF 30+ Lotion Sunscreen For Kids, NonGreasy, LightWeight & NonIrritating(75 g)",
    category: "Mom & Baby",
    description:
      "Fixderma Shadow Kids SPF 30+ Lotion is specially developed for children's delicate skin. Made with the blend of safest sun protectors, this lotion protects the skin from the harmful effects of UV rays. ",
    original_price: "510",
    price: "485",
    offer: "34% OFF",
    in_stock: true,
    rating: "4.6",
    image:
      "https://images-static.nykaa.com/media/catalog/product/9/e/9ee7b27FIXDE00000051.jpg",
  },
];
