import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: "primary";
}

const buttonVariants = cva(
    "button-common",
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

function Button({children, variant, className, ...props}: Props) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)}>
        {children}
    </button>
  )
}

export default Button