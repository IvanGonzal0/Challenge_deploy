const CategoryService = require("../services/categoryService");
const LicenceService = require("../services/licenceService.js");

module.exports = {
  homeView: async (req, res) => {
    const licences = await LicenceService.getAllItemsLicences();
    const categories = await CategoryService.getAllItemsCategories();
    // res.send(
    //   {
    //     view: 'Home View Route',
    //     licences,
    //     categories
    //   }
    // );

    res.render("home", {
      view: {
        title: "Home | Funkoshop",
      },
    });
  },
  contactView: (req, res) => res.send("Contact View Route"),
  aboutView: (req, res) => res.send("About View Route"),
  faqsView: (req, res) => res.send("FAQs View Route"),
};
