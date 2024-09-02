const productsData = [
  {
    name: 'Computer',
    description: 'The Football Is Good For Training And Recreational Purposes',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '6',
    active: false,
    id: '1',
  },
  {
    name: 'Keyboard',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '7',
    active: false,
    id: '2',
  },
  {
    name: 'Salad',
    description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '1',
    active: false,
    id: '3',
  },
  {
    name: 'Car',
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '4',
    active: true,
    id: '4',
  },
  {
    name: 'Sausages',
    description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '5',
    active: true,
    id: '5',
  },
  {
    name: 'Shoes',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '9',
    active: true,
    id: '6',
  },
  {
    name: 'Shirt',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '8',
    active: true,
    id: '7',
  },
  {
    name: 'Pizza',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '3',
    active: true,
    id: '8',
  },
  {
    name: 'Chips',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '6',
    active: false,
    id: '9',
  },
  {
    name: 'Keyboard',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '9',
    active: false,
    id: '10',
  },
  {
    name: 'Ball',
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '2',
    active: true,
    id: '11',
  },
  {
    name: 'Shirt',
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '1',
    active: false,
    id: '12',
  },
  {
    name: 'Chicken',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '5',
    active: false,
    id: '13',
  },
  {
    name: 'Pants',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '5',
    active: false,
    id: '14',
  },
  {
    name: 'Fish',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '3',
    active: false,
    id: '15',
  },
  {
    name: 'Mouse',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '9',
    active: false,
    id: '16',
  },
  {
    name: 'Shirt',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '9',
    active: false,
    id: '17',
  },
  {
    name: 'Salad',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '8',
    active: false,
    id: '18',
  },
  {
    name: 'Shirt',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '8',
    active: false,
    id: '19',
  },
  {
    name: 'Gloves',
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '5',
    active: false,
    id: '20',
  },
  {
    name: 'Chair',
    description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '4',
    active: true,
    id: '21',
  },
  {
    name: 'Bike',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '8',
    active: false,
    id: '22',
  },
  {
    name: 'Keyboard',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '3',
    active: true,
    id: '23',
  },
  {
    name: 'Car',
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '6',
    active: false,
    id: '24',
  },
  {
    name: 'Mouse',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '7',
    active: true,
    id: '25',
  },
  {
    name: 'Ball',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '1',
    active: true,
    id: '26',
  },
  {
    name: 'Cheese',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '7',
    active: false,
    id: '27',
  },
  {
    name: 'Keyboard',
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '4',
    active: false,
    id: '28',
  },
  {
    name: 'Computer',
    description: 'The Football Is Good For Training And Recreational Purposes',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '9',
    active: false,
    id: '29',
  },
  {
    name: 'Fish',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '4',
    active: false,
    id: '30',
  },
  {
    name: 'Soap',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '6',
    active: true,
    id: '31',
  },
  {
    name: 'Towels',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '3',
    active: true,
    id: '32',
  },
  {
    name: 'Mouse',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '9',
    active: false,
    id: '33',
  },
  {
    name: 'Table',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '1',
    active: false,
    id: '34',
  },
  {
    name: 'Gloves',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '7',
    active: false,
    id: '35',
  },
  {
    name: 'Fish',
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '5',
    active: true,
    id: '36',
  },
  {
    name: 'Chicken',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '5',
    active: false,
    id: '37',
  },
  {
    name: 'Chicken',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '9',
    active: false,
    id: '38',
  },
  {
    name: 'Cheese',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '6',
    active: false,
    id: '39',
  },
  {
    name: 'Soap',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '2',
    active: true,
    id: '40',
  },
  {
    name: 'Gloves',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '7',
    active: true,
    id: '41',
  },
  {
    name: 'Soap',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '1',
    active: false,
    id: '42',
  },
  {
    name: 'Chair',
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '4',
    active: false,
    id: '43',
  },
  {
    name: 'Pants',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '2',
    active: true,
    id: '44',
  },
  {
    name: 'Shirt',
    description: 'The Football Is Good For Training And Recreational Purposes',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '9',
    active: true,
    id: '45',
  },
  {
    name: 'Pizza',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '1',
    active: false,
    id: '46',
  },
  {
    name: 'Towels',
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '8',
    active: true,
    id: '47',
  },
  {
    name: 'Gloves',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: 'https://loremflickr.com/640/480/food',
    promotion: false,
    rating: '8',
    active: false,
    id: '48',
  },
  {
    name: 'Cheese',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '8',
    active: false,
    id: '49',
  },
  {
    name: 'Hat',
    description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    image: 'https://loremflickr.com/640/480/food',
    promotion: true,
    rating: '8',
    active: true,
    id: '50',
  },
]
export default productsData
