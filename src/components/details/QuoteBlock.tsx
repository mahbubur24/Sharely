import { ReactNode } from "react"


type QuoteBlockProps = {
  children: ReactNode
}

export function QuoteBlock({ children }: QuoteBlockProps) {
  return (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-muted-foreground text-gray-500">
      {children}
    </blockquote>
  )
}
