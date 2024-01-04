const {findAllCountrys,createNewCountry,findOneCountryById,updateOneCountry,deleteOneCountry}  = require('../controllers/country.controller')

module.exports = (app) => {
    app.get('/api/countries', findAllCountrys);
    app.post('/api/countries', createNewCountry);
    app.get('/api/countries/:id', findOneCountryById);
    app.put('/api/countries/:id', updateOneCountry);
    app.delete('/api/countries/:id', deleteOneCountry);
}