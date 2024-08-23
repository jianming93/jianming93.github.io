import { ReactNode } from 'react'

type TypographyUnorderedListProps = {
    name: String,
    children: Array<ReactNode>
}

export function TypographyUnorderedList( { name, children }: TypographyUnorderedListProps ) {
    return (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {
            children.map((point: ReactNode, index) => {
                return (
                    <li key={`${name}-${index}`}>
                        <p>
                        {point}
                        </p>
                    </li>
                )
            })
        }
      </ul>
    )
  }
  