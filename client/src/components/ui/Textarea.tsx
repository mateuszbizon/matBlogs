import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import React, { forwardRef } from 'react';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  variant?: "primary" | "primary-error";
}

const textareaVariants = cva(
  "resize-none",
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

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ variant, className, ...props }, ref) {
  return (
    <textarea {...props} ref={ref} className={cn(textareaVariants({ variant }), className)} ></textarea>
  );
});

export default Textarea