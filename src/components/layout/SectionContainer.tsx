import React, { forwardRef } from 'react'
import { cn } from '~/lib/utils'

type SectionContainerProps = {
   padded?: boolean;
   containerClassname?: string;
   minFullScreen?: boolean
}

export const SectionContainer = forwardRef<
   HTMLElement,
   React.HTMLAttributes<HTMLElement> & SectionContainerProps

>(({ className, children, padded, containerClassname, ...props }, ref) => {
   return (
      <div className={cn("relative h-full")}>
         <section
            ref={ref}
            className={cn(
               "container flex flex-col lg:max-w-screen-md",
               props.minFullScreen && "flex min-h-[calc(100vh-144px)] w-full flex-col",
               className,
               padded ? "px-4" : ""
            )}
            {...props}
         >
            {children}
         </section>
      </div>
   )
})

SectionContainer.displayName = "SectionContainer"

