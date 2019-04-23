import axios from 'axios'

class WpApi {
  constructor (siteurl) {
    this.apiBase = `${siteurl}/wp-json`
  }

  posts () {
    return axios.get(`${this.apiBase}/wp/v2/posts`, {
      params: {
        page: 1,
        per_page: 5
      }
    })
      .then(json => {
        return { posts: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }

  pages () {
    return axios.get(`${this.apiBase}/wp/v2/pages`, {
      params: {
        page: 1,
        per_page: 5
      }
    })
      .then(json => {
        return { pages: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }

  id (id) {
    return axios.get(`${this.apiBase}/wp/v2/pages?id=${id}`, {
      params: {}
    })
      .then(json => {
        return { page: json.data[0] }
      })
      .catch(e => {
        return { error: e }
      })
  }

  slug (slug) {
    return axios.get(`${this.apiBase}/wp/v2/pages?slug=${slug}`, {
      params: {}
    })
      .then(json => {
        return { slug: json.data[0] }
      })
      .catch(e => {
        return { error: e }
      })
  }

  menus () {
    return axios.get(`${this.apiBase}/menus/v1/menus/`, {
      params: {}
    })
      .then(json => {
        return {
          menu : json.data
        }
      })
      .catch(e => {
        return { error: e }
      })
  }
  single_menus (menu_name) {
    return axios.get(`${this.apiBase}/menus/v1/menus/${menu_name}`, {
      params: {}
    })
      .then(json => {
        return {
          menu : json.data
        }
      })
      .catch(e => {
        return { error: e }
      })
  }
}

const wp = new WpApi('http://localhost:8888/security/');

export default wp
