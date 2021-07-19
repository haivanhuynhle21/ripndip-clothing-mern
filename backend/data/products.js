const products = [
  {
    _id: '1',
    name: 'Welcome To Heck Slides (Black Flame)',
    image: '/images/dep_den.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Integer feugiat scelerisque varius morbi enim nunc faucibus a.',
    brand: 'RipnDip',
    category: 'Giày Dép',
    price: 44.0,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'Welcome to Heck Slides (White)',
    image: '/images/dep_trang.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Integer feugiat scelerisque varius morbi enim nunc faucibus a.',
    brand: 'RipnDip',
    category: 'Giày Dép',
    price: 44.0,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '3',
    name: 'Gluten Free Hoodie (Black)',
    image: '/images/hoodie_den.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Integer feugiat scelerisque varius morbi enim nunc faucibus a.',
    brand: 'RipnDip',
    category: 'Hoodie',
    price: 88.0,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '4',
    name: 'The Great Wave Of Nerm Hoodie (Purple Dye)',
    image: '/images/hoodie_tim.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Integer feugiat scelerisque varius morbi enim nunc faucibus a.',
    brand: 'Sony',
    category: 'Hoodie',
    price: 94.0,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '5',
    name: 'The Great Wave Of Nerm Hoodie (Blue Dye)',
    image: '/images/hoodie_xanh.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Integer feugiat scelerisque varius morbi enim nunc faucibus a.',
    brand: 'RipnDip',
    category: 'Hoodie',
    price: 94.0,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '6',
    name: 'Pablo Swim Shorts (Black)',
    image: '/images/quan_hoa.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Integer feugiat scelerisque varius morbi enim nunc faucibus a.',
    brand: 'RipnDip',
    category: 'Quần short',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },

  {
    _id: '7',
    name: 'Mid City Sweatshorts (Multi)',
    image: '/images/quan_5_mau.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Integer feugiat scelerisque varius morbi enim nunc faucibus a.',
    brand: 'RipnDip',
    category: 'Quần short',
    price: 77.0,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },

  {
    _id: '8',
    name: 'Pablo Swim Shorts (Black)',
    image: '/images/quan_dai_tim.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Integer feugiat scelerisque varius morbi enim nunc faucibus a.',
    brand: 'RipnDip',
    category: 'Quần',
    price: 115.0,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },

  {
    _id: '9',
    name: 'Down By The Seashore Tee (Black)',
    image: '/images/tshirt_den.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Integer feugiat scelerisque varius morbi enim nunc faucibus a.',
    brand: 'RipnDip',
    category: 'Áo t-shirt',
    price: 33.0,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },

  {
    _id: '10',
    name: 'Gluten Free Tee (Natural)',
    image: '/images/tshirt_offwhite.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Integer feugiat scelerisque varius morbi enim nunc faucibus a.',
    brand: 'RipnDip',
    category: 'Áo t-shirt',
    price: 33.0,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },

  {
    _id: '11',
    name: 'Lord Nermal Pocket Tee (Spiral Dye)',
    image: '/images/tshirt_tiedye.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Integer feugiat scelerisque varius morbi enim nunc faucibus a.',
    brand: 'RipnDip',
    category: 'Áo t-shirt',
    price: 38.0,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
]

export default products
