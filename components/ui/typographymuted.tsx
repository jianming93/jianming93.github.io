import { ReactNode } from 'react'

type TypographyMutedProps = {
  children: ReactNode
}

export function TypographyMuted( { children }: TypographyMutedProps ) {
    return (
      <p className="text-sm text-muted-foreground">
        {children}
      </p>
    )
  }
  