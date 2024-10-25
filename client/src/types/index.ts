import { ReactNode } from "react";

export type TNavItem = {
    name: string;
} & ({
    isLink: true;
    href: string;
} | {
    isLink: false;
    content: ReactNode
})

export type TPostFilters = {
    sort?: "asc" | "desc"
}