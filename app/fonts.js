import { Poppins,Montserrat } from "next/font/google"; 

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
  weight:["400","500","600","700","800"]
}); 
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-logo",
  weight:["400","700"]
}); 