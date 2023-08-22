const Butter =  require('./src/libs/butter.js');
// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    // create a product page collection from the smoothies page collection type
    const product = addCollection({
      typeName: "product"
    });

    // retrieve the hproduct page from Butter CMS
    const productResponse = await Butter.page.retrieve('smoothies_landing_page', 'emmas-coffee');


    // add the data to the product collection
    product.addNode({id: "emmas-coffee", ...productResponse.data.data.fields});

  });
  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};