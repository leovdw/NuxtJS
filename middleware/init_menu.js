export default async function ({ store }) {
  if (!process.server) {
    console.log("middleware from client side");
  }

  // Function that returns my menu data
  const menu = store.getters['nav/getMenuByName']('header');

  //Condition so the fetch isn't made when we arleady have the data (prevent the loader from activating when changing pages)
  if (!menu) {
    await store.dispatch('nav/fetchData');
  }
}
