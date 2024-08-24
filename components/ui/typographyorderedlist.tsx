import { ReactNode } from 'react'

type TypographyOrderedListProps = {
    name: String,
    children: Array<ReactNode>
}

export function TypographyOrderedList( { name, children }: TypographyOrderedListProps ) {
    return (
      <ol className="ml-6 list-decimal [&>li]:mt-2">
        {
            children.map((point: ReactNode, index) => {
                return (
                    <li key={`${name}-${index}`}>
                        {point}
                    </li>
                )
            })
        }
      </ol>
    )
  }
