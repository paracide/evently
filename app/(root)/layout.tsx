import type {Metadata} from 'next'
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";


export const metadata: Metadata = {
    title: 'Evently',
    description: 'Evently is a platform for event management.',
    icons: {
        icon: '/assets/images/logo.svg'
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <main className="flex-1">{children}</main>
            <Footer/>
        </div>
    )
}
