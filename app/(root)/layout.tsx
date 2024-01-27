import type {Metadata} from 'next'



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
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
