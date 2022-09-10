exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/custom',
    component: require.resolve('./src/templates/custom.js'),
    context: {
      title: "Tommy's Favorite Page",
      meta: {
        description: 'A page for all the quotes with context',
      },
    },
  });
};
