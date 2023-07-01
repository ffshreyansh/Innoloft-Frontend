import Navbar from '@/components/Navbar';
import './globals.css'

export const metadata = {
  title: 'InnoLoft-Task',
  description: 'Created By Shreyansh',
}

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
     </head>
    <body>
      
        <main className='app'>
        <Navbar/>
           {children}
        </main>
   
    </body>
  </html>
);

export default RootLayout;
