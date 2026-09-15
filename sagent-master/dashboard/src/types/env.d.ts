/**
 * Cloudflare environment bindings type declaration
 */

declare global {
  interface D1Result<T = unknown> {
    results?: T[];
    success?: boolean;
    error?: string;
    meta?: any;
  }

  interface D1PreparedStatement {
    bind(...values: any[]): D1PreparedStatement;
    first<T = unknown>(colName?: string): Promise<T | null>;
    run<T = unknown>(): Promise<D1Result<T>>;
    all<T = unknown>(): Promise<D1Result<T>>;
    raw<T = unknown>(): Promise<T[]>;
  }

  interface D1Database {
    prepare(query: string): D1PreparedStatement;
    dump(): Promise<ArrayBuffer>;
    batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
    exec(query: string): Promise<D1Result>;
  }

  interface R2Bucket {
    get(key: string): Promise<any>;
    put(key: string, value: any, options?: any): Promise<any>;
    delete(keys: string | string[]): Promise<void>;
    list(options?: any): Promise<any>;
  }

  interface CloudflareEnv {
    DB: D1Database;
    PRODUCT_IMAGES: R2Bucket;
    WORKER_URL?: string;
    WORKER_ADMIN_SECRET?: string;
  }
}

export {};


