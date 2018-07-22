type Idiom = {
  id: number;
  title: string;
  description: string;
  translates: {
    ru: string;
  };
};

type Helpers = {
  pushSubscribe: {
    title: string;
  };
};

class API {
  fetchIdioms(): Promise<Idiom[]> {
    return fetch(`/idioms.json`).then(response => {
      return response.json();
    });
  }

  fetchHelpers(): Promise<Helpers> {
    return fetch(`/helpers.json`).then(response => {
      return response.json();
    });
  }
}

export const api = new API();
