import wp from '~/lib/wp';

const api = [ wp ];

export const state = () => ({
  menu: '',
  current : '',
})

export const mutations = {
  set_menu(state, value) {
    state.menu = value;
  },
  set_current(state, value) {
    state.current = value;
  },
}

export const getters = {
  get_current(state, getters){
    return state.current;
  },
}

export const actions = {
  fetchData ({ commit }) {
    api[0].menus().then(function(value) {
      commit('set_menu', value.items)
    });
  },
  setCurrent ({ commit }, value) {
    commit('set_current', value)
  }
}
