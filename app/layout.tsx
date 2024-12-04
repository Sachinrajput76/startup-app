import { APP_DISCRIPTION, APP_NAME, APP_ROUTES } from '@/utils/constants';
import './globals.css';
import { ReactNode } from 'react';
import LinkComponent from '@/components/link-components';

export const metadata = {
  title: APP_NAME,
  description: APP_DISCRIPTION,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white py-4">
          <nav className="container mx-auto flex justify-center space-x-4">
            <LinkComponent
              path={APP_ROUTES.HOME}
              classes="hover:underline font-medium"
              text="Home"
            />
            <LinkComponent
              path={APP_ROUTES.REGISTER}
              classes="hover:underline font-medium"
              text="Register"
            />
            <LinkComponent
              path={APP_ROUTES.DASHBOARD}
              classes="hover:underline font-medium"
              text="Dashboard"
            />
          </nav>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          {children}
        </main>
        <footer className="bg-blue-600 text-white py-4 text-center">
          &copy; 2024 {APP_NAME}. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
