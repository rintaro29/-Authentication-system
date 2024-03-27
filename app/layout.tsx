import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation/Navigation";
import getCurrentUser from "./actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prisma Auth",
  description: "Prisma Auth",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  return (
    <html>
      <body className={inter.className}>
        <div>
          <div className="flex min-h-screen flex-col">
            <Navigation currentUser={currentUser} />
            <main className="container mx-auto max-w-screen-sm flex-1 px-1 py-5">{children}</main>

            <footer className="py-5">
              <div className="text-center text-sm">This is Footer</div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
