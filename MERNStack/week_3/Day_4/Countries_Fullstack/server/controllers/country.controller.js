const Country = require('../models/country.model')
// Create
module.exports.createNewCountry = (req, res) => {
    Country.create(req.body)
        .then(newCreatedCountry => {res.status(201).json(newCreatedCountry)})
        .catch(error => res.status(400).json(error))
}
// Read All
// findAllCountrys
module.exports.findAllCountrys = (req, res) => {
    Country.find({})
        .then(allCountrys =>res.status(200).json(allCountrys))
        .catch(error =>res.status(404).json(error))
}
// Read One
// findOneCountry
module.exports.findOneCountryById = (req, res) => {
    Country.findById({ _id: req.params.id })
        .then(oneCountry =>res.status(200).json(oneCountry))
        .catch(error =>res.status(500).json(error))
}

// Update
// updateOneCountry
module.exports.updateOneCountry = (req, res) => {
    Country.findOneAndUpdate({ _id: req.params.id }, req.body,  {new:true, runValidators:true})
        .then(updatedCountry =>res.status(200).json(updatedCountry))
        .catch(error =>res.status(500).json(error))
}
// Delete
// deleteOneCountry
module.exports.deleteOneCountry = (req,res) => {
    Country.findByIdAndDelete({_id: req.params.id})
    .then(deletedCountry =>res.status(200).json(deletedCountry))
    .catch(error =>res.status(500).json(error))
}