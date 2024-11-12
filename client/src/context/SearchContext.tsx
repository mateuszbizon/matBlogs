import { createContext, useContext, useState } from "react";

type TSearchContext = {
    searchUsersOpen: boolean;
    openSearchUsers: () => void;
    closeSearchUsers: () => void;
    searchPostsOpen: boolean;
    openSearchPosts: () => void;
    closeSearchPosts: () => void;
}

const SearchContext = createContext<TSearchContext>({
    searchUsersOpen: false,
    openSearchUsers: () => {},
    closeSearchUsers: () => {},
    searchPostsOpen: false,
    openSearchPosts: () => {},
    closeSearchPosts: () => {}
})

export function useSearch() {
    return useContext(SearchContext)
}

export default function SearchProvider({ children }: { children: React.ReactNode }) {
    const [searchUsersOpen, setSearchUsersOpen] = useState(false)
    const [searchPostsOpen, setSearchPostsOpen] = useState(false)

    function openSearchUsers() {
        setSearchUsersOpen(true)
    }

    function closeSearchUsers() {
        setSearchUsersOpen(false)
    }

    function openSearchPosts() {
        setSearchPostsOpen(true)
    }

    function closeSearchPosts() {
        setSearchPostsOpen(false)
    }

    const value: TSearchContext = {
        searchUsersOpen,
        searchPostsOpen,
        openSearchUsers,
        openSearchPosts,
        closeSearchUsers,
        closeSearchPosts
    }

  return (
    <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>
  )
}