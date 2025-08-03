const API_BASE = 'https://portfolio-backend-okze.onrender.com/api';

class DataCache {
  constructor() {
    this.cache = {};
    this.loading = {};
  }

  async fetchData(endpoint) {
    if (this.cache[endpoint]) {
      return this.cache[endpoint];
    }

    if (this.loading[endpoint]) {
      return this.loading[endpoint];
    }

    this.loading[endpoint] = fetch(`${API_BASE}${endpoint}`)
      .then(response => response.json())
      .then(data => {
        this.cache[endpoint] = data;
        delete this.loading[endpoint];
        return data;
      })
      .catch(error => {
        delete this.loading[endpoint];
        throw error;
      });

    return this.loading[endpoint];
  }

  clearCache() {
    this.cache = {};
    this.loading = {};
  }
}

export const dataCache = new DataCache();