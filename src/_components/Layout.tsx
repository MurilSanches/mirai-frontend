import { ReactNode } from 'react'
import Header from "./Header"

interface ILayout {
    children: ReactNode;
}

const Layout = ({ children }: ILayout) => (
    <section className="flex flex-col min-h-screen w-full">  
        <Header />
        <div className="min-h-screen">
            {children}
        </div>
    </section>
)

export default Layout