import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import React from 'react'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    variant?: "primary";
    href: string;
}

const buttonVariants = cva(
    "button-common flex",
    {
        variants: {
            variant: {
                primary: "button-primary",
            },
        } ,
        defaultVariants: {
            variant: "primary",
        }
    }
)

function ButtonLink({children, variant, href, className, ...props}: Props) {
  return (
    <Link href={href} {...props} className={cn(buttonVariants({ variant }), className)}>
        {children}
    </Link>
  )
}

export default ButtonLink