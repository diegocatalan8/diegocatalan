import './globals.css'

export const metadata = {
  title: 'Diego Catalán Portfolio',
  description: 'Diego Catalán Portfolio',
}
export default function RootLayout({ children }) {
  return (
    
        <html lang="en">
              <body >
                  {children} 
              </body>
        </html>
    
  )
}
