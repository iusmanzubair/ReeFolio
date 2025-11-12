import { cn } from "../utils/utils"

interface MaxWidthWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const MaxWidthWrapper = ({ children, className, ...props }: MaxWidthWrapperProps) => {
  return <section className={cn("w-full max-w-7xl mx-auto", className)} {...props}>{children}</section>
}
