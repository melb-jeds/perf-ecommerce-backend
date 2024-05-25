export type QueryType<T> = { match: Partial<T> } | { and: QueryType<T>[] } | { or: QueryType<T>[] }
