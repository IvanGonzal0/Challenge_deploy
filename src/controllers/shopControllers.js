const ItemsService = require("../services/itemServices");

module.exports = {
  shopView: async (req, res) => {
    const items = await ItemsService.getAllItems();
    const { data } = items;
    res.render("../views/shop/shop", {
      view: {
        title: "Shop | Funkoshop",
      },
      items: data,
    });
  },
  itemView: async (req, res) => {
    const id = req.params.id;
    const item = await ItemsService.getItem(id);
    const { data } = item;

    res.render("../views/shop/item", {
      view: {
        title: "Item | Funkoshop",
      },
      item: data[0],
    });
  },

  detailView: async (req, res) => {
    const id = req.params.id;
    const result = await ItemsService.getItem(id);
    const { data } = result;
    const [item] = data;

    // if (!data[0]) {
    //   return res
    //     .status(404)
    //     .send("El producto con el ID seleccionado noe xiste o fue eliminado");
    // }

    return res.render("./shop/detail", {
      view: {
        title: "Item | Funkoshop",
      },
      item: item != undefined ? item : false
    });
  },

  addItemToCart: (req, res) => res.send("Route to add a item to cart"),
  cartView: (req, res) => res.send("Cart View Route"),
  checkout: (req, res) =>
    res.send("Route to receive the selected products and init the buy process"),
};
