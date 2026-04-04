export class Request<T> {
  processId?: string;
  data?: T;

  constructor(data: Partial<T>) {
    Object.assign(this, data);
  }
}

export type RequestType<T> = Request<T>;
