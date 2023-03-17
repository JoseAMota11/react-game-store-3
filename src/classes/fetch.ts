class Fetch {
  private options: object = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  public async get(url: string, request: object) {
    const params = new URLSearchParams(url);

    for (const [key, value] of Object.entries(request)) {
      params.set(key, value);
    }

    url = `${url}?${params}`;

    const data = await fetch(url, this.options);
    const response = await data.json();
    return response;
  }
}

const fetchSomething = new Fetch();

Object.freeze(fetchSomething);

export default fetchSomething;
