import { ThemeProvider } from "./providers/ThemeProvider";
import "./globals.css";
import { poppins, montserrat } from "./fonts"; 

export const metadata = {
  title: "Mumair",
  description: "Portfolio of Mumair",
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
