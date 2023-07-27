import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(newData: T): void {
    this.attributes.set(newData);
    this.events.trigger("change");
  }

  async fetch(): Promise<void> {
    const id = this.get("id");

    if (typeof id !== "number") {
      throw new Error("Cannot fetch user data");
    }

    const response: AxiosResponse = await this.sync.fetch(id);

    this.set(response.data);
  }

  async save(): Promise<void> {
    try {
      await this.sync.save(this.attributes.getAll());
      this.trigger("save");
    } catch (error) {
      this.trigger("error");
    }
  }
}
