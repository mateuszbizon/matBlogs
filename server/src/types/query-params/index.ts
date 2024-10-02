type TQuery<T extends string[]> = {
    [key in T[number]]: string;
}

export type TSearchUsersQueryParams = TQuery<["search"]>

export type TSearchPostsQueryParams = TQuery<["search"]>