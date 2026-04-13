import { ThemeProvider } from "./providers/ThemeProvider";
import "./globals.css";
import { poppins, montserrat } from "./fonts"; 

export const metadata = {
  title: "Rezaul Karim - Next.js Developer",
  description: "Portfolio of Rezaul Karim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable}  font-primary tracking-wide leading-normal `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children} 
        </ThemeProvider>
      </body>
    </html>
  );
}
