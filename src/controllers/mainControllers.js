const LicenceService = require("../services/licenceService");
const ItemsService = require('../services/itemServices');

module.exports = {
  homeView: async (req, res) => {
    const licences = await LicenceService.getAllItemsLicences();
    const items = await ItemsService.getAllItems();
    const {data} = items;
    res.render("home", {
      view: {
        title: "Home | Funkoshop",
      },
      items:data,
      collections: licences.data,
    });
  },
  contactView: async (req,res) => {
    res.render('./contact/contact', {
      view: {
        title: "Contacto | Funkoshop"
      },});
  },
  aboutView: (req, res) => res.send("About View Route"),
  faqsView: (req, res) => res.send("FAQs View Route"),
};
