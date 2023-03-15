class Fetch {
  private url = '';
  private options: object = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  public async get(url: string, request: object) {
    this.url = url;
    const params = new URLSearchParams(this.url);

    for (const [key, value] of Object.entries(request)) {
      params.set(key, value);
    }

    this.url = `${this.url}?${params}`;

    const data = await fetch(this.url, this.options);
    const response = await data.json();
    return response;
  }
}

const fetchSomething = new Fetch();

Object.freeze(fetchSomething);

export default fetchSomething;
