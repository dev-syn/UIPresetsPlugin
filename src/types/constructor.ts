type Constructor<T> = T extends new (...args: infer P) => infer R ? new (...args: P) => R : never;

type ConstructorParamsMap<T> = {
    [K in keyof T]: T[K] extends new (...args: infer P) => any ? (P extends never ? [] : P) : never;
}

export { Constructor, ConstructorParamsMap }