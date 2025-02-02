declare module '@ember/engine/-private/types/initializer' {
  export default interface Initializer<T> {
    name: string;
    before?: string[] | undefined;
    after?: string[] | undefined;
    initialize(application: T): void;
  }
}
