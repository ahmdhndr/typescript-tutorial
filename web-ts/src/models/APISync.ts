import axios, { AxiosPromise, AxiosResponse } from "axios";

interface HasId {
  id?: number;
}

export class APISync<T extends HasId> {
  constructor(public rootUrl: string) {}

  async fetch(id: number): AxiosPromise {
    const response: AxiosResponse = await axios.get(`${this.rootUrl}/${id}`);
    return response;
  }

  async save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      const response: AxiosResponse = await axios.put(`${this.rootUrl}/${id}`, data);
      return response;
    } else {
      const response: AxiosResponse = await axios.post(this.rootUrl, data);
      return response;
    }
  }
}
