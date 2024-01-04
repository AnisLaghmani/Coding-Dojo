const express = require('express')
const app = express()
// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */
const createUser = () => {
    const newUser = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        _id: faker.database.mongodbObjectId()
    };
    return newUser;
};

const createCompanyObject = () => {
    const newCompanyObject = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        adress: {
            street: faker.location.street(),
            street: faker.location.city(),
            street: faker.location.state(),
            street: faker.location.zipCode(),
            street: faker.location.country()
        }
    };
    return newCompanyObject
};
const newFakeUser = createUser();
console.log('new fake useer is : ',newFakeUser);

const newFakeCompanyObject = createCompanyObject();
console.log('new company object is: ',newFakeCompanyObject);


app.get('/', (requestObject, responseObject) => {
    responseObject.status(200).json({ message: 'Server is Up and Running', ok: true })
})


app.get('/api/users/new', (req, res) => {
    res.status(200).json({ newFakeUser: newFakeUser, message: "new fake user", ok: true })
});

app.get('/api/companies/new', (req, res) => {
    res.status(200).json({ newFakeCompanyObject: newFakeCompanyObject, message: "new fake company object", ok: true })
});

app.get('/api/user/company', (req, res) => {
    res.status(200).json({ newFakeCompanyObject: newFakeCompanyObject,newFakeUser: newFakeUser, message: "new fake user and company ocject", ok: true })
});
// -----------------
app.listen(8000, () => {
    console.log('>>>>> SERVER ON PORT 8000 <<<<<');
})