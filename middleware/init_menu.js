export default function ({ store, dispatch }) {
  // Function that returns my menu data
  function menu(){
    return store.getters['nav/getMenuByName']('header');
  }
  //Condition so the fetch isn't made when we arleady have the data (prevent the loader from activating when changing pages)
  if (!menu()) {
    store.dispatch('nav/fetchData');
  }
}
