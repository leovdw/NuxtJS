import wp from '~/lib/wp';

const api = [ wp ];

export const state = () => ({
  menu:  {},
  current : '',
  fetching : false,
})

export const mutations = {
  set_menu(state, value) {
    state.menu[ value.name ] = value.item;
  },
  set_current(state, value) {
    state.current = value;
  },
  set_fetch(state, value) {
    state.fetching = value;
  },
}

export const getters = {
  get_current(state, getters){
    return state.current;
  },
}

export const actions = {
  fetchData ({ commit, state }) {
    commit('set_fetch', true);
    api[0].menus() // Fetching all Menus
      .then(function(value_menus) {
        if (value_menus.menu.length > 1) { // If there is more then 1 fetch each menu individualy
          const menus = {};
          value_menus.menu.forEach(function(element) {
            api[0].single_menus(element.slug) // Single menu fetch
              .then(function(value) {
                // adding the menus's values into the
                menus.name = element.slug;
                menus.item = value.menu.items;

                commit('set_menu', menus); // Adding the fetched menu to the state

                if (Object.keys(state.menu).length === value_menus.menu.length) {
                  // If we fetched all menus, update the 'Fetching value' on the state
                  // which will stop the loader on the frontend
                  commit('set_fetch', false);
                }
              })
          });
        }else {
          // Else there is only one menu
          commit('set_menu', value_menus.menu);
        }
      });
  },
  setCurrent ({ commit }, value) {
    commit('set_current', value)
  }
}
