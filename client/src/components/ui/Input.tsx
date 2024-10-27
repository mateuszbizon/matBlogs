import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import React, { forwardRef } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "primary" | "primary-error";
}

const inputVariants = cva(
  "",
  {
      variants: {
          variant: {
              primary: "input",
              "primary-error": "input input-error",
          },
      } ,
      defaultVariants: {
          variant: "primary",
      }
  }
)

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ variant, className, ...props }, ref) {
  return (
    <input {...props} ref={ref} className={cn(inputVariants({ variant }), className)} />
  );
});

export default Input