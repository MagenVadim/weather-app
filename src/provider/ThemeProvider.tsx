import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const ThemeProvider = ({children, ...props}: Props) =>{

    return <div>{children}</div>
}