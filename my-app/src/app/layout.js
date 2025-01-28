// src/app/layout.js
import "../styles/global.css"; // Import global styles
import Navbar from "../components/Navbar"; // Import Navbar

export const metadata = {
  title: "Otomex Innovations",
  description: "Driving innovation for a sustainable future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> 
        {children} 
      </body>
    </html>
  );
}
