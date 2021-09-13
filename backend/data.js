import bcrypt from 'bcryptjs';
const data = {
    users:[
        {
        name:'Sanjivani',
        email:'admin@example.com',
        password:bcrypt.hashSync('1234',8),
        isAdmin:true,
        },
        {
            name:'Neha',
            email:'user@example.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:false,
            },

    ],
    products:[
        {
            
            name:'Onion',
            category:'Vegetables',
            image:'/images/p1.jpg',
            price:40,
            countInStock:100,
            rating:4.5,
            numReviews:10,
            description:'fresh products',

        },
        {
           
            name:'Potatoes',
            category:'Vegetables',
            image:'/images/p2.jpg',
            price:30,
            countInStock:200,
            rating:4.0,
            numReviews:10,
            description:'fresh products',

        },
        {
            
            name:'Capsicum',
            category:'Vegetables',
            image:'/images/p3.jpg',
            price:25,
            countInStock:500,
            rating:4.7,
            numReviews:17,
            description:'fresh products',

        },
        {
           
            name:'Brinjal',
            category:'Vegetables',
            image:'/images/p4.jpg',
            price:20,
            countInStock:0,
            rating:4.5,
            numReviews:14,
            description:'fresh products',

        },
        {
          
            name:'Carrot',
            category:'Vegetables',
            image:'/images/p5.jpg',
            price:20,
            countInStock:500,
            rating:4.5,
            numReviews:10,
            description:'fresh products',

        },
        {
            
            name:'Cauliflower',
            category:'Vegetables',
            image:'/images/p6.jpg',
            price:30,
            countInStock:100,
            rating:4.5,
            numReviews:15,
            description:'fresh products',

        },
    ],
};
export default data;