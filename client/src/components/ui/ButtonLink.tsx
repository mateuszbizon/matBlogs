import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import React from 'react'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "white" | "primary-no-bg" | "delete-no-bg" | "secondary-no-bg";
    padding?: "small" | "medium"
    href: string;
}

const buttonVariants = cva(
    "button-common flex",
    {
        variants: {
            variant: {
                primary: "button-primary",
                secondary: "button-secondary",
                white: "button-white",
                "primary-no-bg": "button-primary-no-bg",
                "delete-no-bg": "button-delete-no-bg",
                "secondary-no-bg": "button-secondary-no-bg"
            },
            padding: {
                small: "px-3 py-2",
                medium: "px-6 py-2"
            }
        } ,
        defaultVariants: {
            variant: "primary",
            padding: "medium"
        }
    }
)

function ButtonLink({children, variant, padding, href, className, ...props}: Props) {
  return (
    <Link href={href} {...props} className={cn(buttonVariants({ variant, padding }), className)}>
        {children}
    </Link>
  )
}

export default ButtonLink