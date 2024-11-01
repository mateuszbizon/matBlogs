import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "white" | "primary-no-bg" | "delete-no-bg";
    padding?: "small" | "medium";
}

const buttonVariants = cva(
    "button-common",
    {
        variants: {
            variant: {
                primary: "button-primary",
                secondary: "button-secondary",
                white: "button-white",
                "primary-no-bg": "button-primary-no-bg",
                "delete-no-bg": "button-delete-no-bg"
            },
            padding: {
                small: "px-3 py-2",
                medium: "px-6 py-2",
            }
        } ,
        defaultVariants: {
            variant: "primary",
            padding: "medium"
        }
    }
)

function Button({children, variant, padding, className, ...props}: Props) {
  return (
    <button {...props} className={cn(buttonVariants({ variant, padding }), className)}>
        {children}
    </button>
  )
}

export default Button