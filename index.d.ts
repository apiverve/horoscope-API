declare module '@apiverve/horoscope' {
  export interface horoscopeOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface horoscopeResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class horoscopeWrapper {
    constructor(options: horoscopeOptions);

    execute(callback: (error: any, data: horoscopeResponse | null) => void): Promise<horoscopeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: horoscopeResponse | null) => void): Promise<horoscopeResponse>;
    execute(query?: Record<string, any>): Promise<horoscopeResponse>;
  }
}
