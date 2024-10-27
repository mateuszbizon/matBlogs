import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import React from 'react'

type Props = React.LabelHTMLAttributes<HTMLLabelElement> & {
    children: React.ReactNode;
    variant?: "primary" | "file";
}

const labelVariants = cva(
    "",
    {
        variants: {
            variant: {
                primary: "label",
                file: "button-white p-3 button-common cursor-pointer"
            },
        } ,
        defaultVariants: {
            variant: "primary",
        }
    }
)

function Label({ children, variant, className, ...props }: Props) {
  return (
    <label {...props} className={cn(labelVariants({ variant }), className)}>
        {children}
    </label>
  )
}

export default Label