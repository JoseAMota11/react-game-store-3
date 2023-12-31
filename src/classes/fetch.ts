class Fetch {
  private optionGET: object = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  public async get(url: string, request?: object) {
    const params = new URLSearchParams(url);

    if (request) {
      for (const [key, value] of Object.entries(request)) {
        params.set(key, value);
      }
    }

    if (params.toString()) url = `${url}?${params.toString()}`;

    const data = await fetch(url, this.optionGET);
    const response = await data.json();
    return response;
  }

  public async post(url: string, options: RequestInit) {
    const data = await fetch(url, options);
    const response = await data.json();
    return response;
  }
}

const fetchSomething = new Fetch();

Object.freeze(fetchSomething);

export default fetchSomething;
