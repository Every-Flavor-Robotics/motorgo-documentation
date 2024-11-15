// components/TwoColumns.tsx
import type { ReactElement, ReactNode } from 'react'

type ColumnProps = {
    children: ReactNode
}

export function Column({ children }: ColumnProps): ReactElement {
    return <div className="nextra-column">{children}</div>
}

type TwoColumnsProps = {
    children: ReactNode[]
}

export function TwoColumns({ children }: TwoColumnsProps): ReactElement {
    return (
        <div className="nextra-two-columns grid grid-cols-1 md:grid-cols-2 gap-4">
            {children}
        </div>
    )
}