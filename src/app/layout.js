import { Inter } from "next/font/google";
import "./globals.css";
// import Sidebar from "./components/sidebar";
import Header from "../components/header";
import { Layout } from "../components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 p-8">
        <Layout>
         {children}
        </Layout>
      </body>
    </html>
  );
}
