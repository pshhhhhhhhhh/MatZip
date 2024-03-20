import { Inter } from "next/font/google";
import "./globals.css";

import FoldBtn from "./components/FoldBtn";
import StoreProvider from "./StoreProvider";
import { useAppSelector } from "@/lib/hooks";




const inter = Inter({ subsets: ["latin"] });




export const metadata = {
  title: "맛집코스를 만들어보자",
  description: "Generated by 맛집코스",
};



export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </head>
      <StoreProvider>
      <body className={inter.className}>
        {/* <nav class="navbar">
          <input placeholder="Search" class="nav-search" />
          <div class="search-button">
            <i class="fas fa-search" style={{ color: "#ffffff" }}></i>
          </div>
          <div style={{flexGrow : 1}}></div>
          <div class="nav-right-content">
            <i class="fas fa-bell"></i>
            <i class="fas fa-envelope"></i>
            <p>Park Park</p>
          </div>
        </nav> */}
        {/* <nav className="left-navbar">
          <div className="search-wrap">
            <input placeholder="Search" className="left-search" />
            <div className="search-button">
              <i className="fas fa-search" style={{ color: "#ffffff" }}></i>
            </div>
          </div>
          <FoldBtn></FoldBtn>
        </nav>
        */}
        
        {children}
      </body>
      </StoreProvider>
    </html>
  );
}
