"use client";
import Navbar from '@/components/Navbar';
import './globals.css'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
     </head>
    <body>
      
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
        <Navbar/>
           {children}
        </main>
   
    </body>
  </html>
);

export default RootLayout;
