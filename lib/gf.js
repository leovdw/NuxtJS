import axios from 'axios'

class GfApi {
  constructor (siteurl) {
    this.apiBase = `${siteurl}/wp-json/gf/v2`;

    // axios.defaults.headers.common['Authorization'] =
  }

  // forms () {
  //   return axios.get(`${this.apiBase}/forms`, {
  //     params: {},
  //   })
  //     .then(json => {
  //       return { forms: json.data }
  //     })
  //     .catch(e => {
  //       return { error: e }
  //     })
  // }
  forms () {

    return fetch(`${this.apiBase}/forms`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            "Authorization": JSON.stringify({
                                'client_id': 'ck_f6623acdf08dc33c84eaf0faa9a2b4fc80090f25',
                                'client_secret': 'cs_81830c3c4fb39cc6aa75a53189d06b2f6288b94e',
                                'grant_type': 'client_credentials'
                              }),
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    })
        .then(res => res.clone().json())
        .then(json => {
            return { forms: json.data }
        })
  }

  single_form (id) {
    return axios.get(`${this.apiBase}/forms/${id}`, {
      params: {}
    })
      .then(json => {
        return { single_form: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }

  submit_form (id, data) {
    return axios.get(`${this.apiBase}/forms/${id}/submissions`, {
      params: {}
    })
      .then(json => {
        return { single_form: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }
}

const gf = new GfApi('http://localhost:8888/security');

export default gf
