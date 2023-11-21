import '../app/globals.css';

import LeftBar from './components/LeftBar';

export const metadata = {
  title: 'Берий Тоаба',
  description: 'Группа компаний Тоаба',
}




export default function RootLayout({ children }) {
 return (
    <html lang="ru">
      <body>
        <div className="app">
            <LeftBar />

            {children}
        </div>
      </body>
    </html>
  )
}
