const app = require("./app");
const mongoose = require("mongoose");
const supertest = require("supertest");

beforeEach((done) => {
  mongoose.connect(process.env.CONNECTION_URL,
    {useNewUrlParser:true,
        useUnifiedTopology:true,
        dbName:'algobuy' },
    () => done());
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done())
  });
});



test("GET /algo-buy/products/", async () => {
    const post = await post.create({ id: "62405b38fdbf597798ac9968", price: 2400,
     name:"Anuj chaudhary", 
     description:"Dell Latitude 5420",
     category:"62405a34bb51a65fcc977805",
     producttype:"laptop",
     features:{
         brand:"Dell",
         RAM:8,
         Processor:"Intel",
         ScreenSize:15.5,
         Backlit:true
         }
     });
  
    await supertest(app).get("/algo-buy/products/")
      .expect(200)
      .then((response) => {
        // Check type and length
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(7);
  
        // Check data
        expect(response.body[0]._id).toBe(post.id);
        expect(response.body[0].price).toBe(post.price);
        expect(response.body[0].name).toBe(post.name);
        expect(response.body[0].category).toBe(post.category);
        expect(response.body[0].description).toBe(post.description);
        expect(response.body[0].producttype).toBe(post.producttype);
        expect(response.body[0].features).toBe(post.features);
      });
  });



  test("GET /algo-buy/products/search/:item", async () => {
    const post = await Post.create({ id: "62405b38fdbf597798ac9968", price: 2400,
    name:"Anuj chaudhary", 
    description:"Dell Latitude 5420",
    category:"62405a34bb51a65fcc977805",
    producttype:"laptop",
    features:{
        brand:"Dell",
        RAM:8,
        Processor:"Intel",
        ScreenSize:15.5,
        Backlit:true
        }
    });
  
    await supertest(app).get("/algo-buy/products/search/laptop")
      .expect(200)
      .then((response) => {
        expect(response.body[0]._id).toBe(post.id);
        expect(response.body[0].price).toBe(post.price);
        expect(response.body[0].name).toBe(post.name);
        expect(response.body[0].category).toBe(post.category);
        expect(response.body[0].description).toBe(post.description);
        expect(response.body[0].producttype).toBe(post.producttype);
        expect(response.body[0].features).toBe(post.features);
      });
  });
