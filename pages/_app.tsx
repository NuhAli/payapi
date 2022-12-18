import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled from "styled-components";
import { DM_Serif_Display, Public_Sans } from "@next/font/google";

const dm = DM_Serif_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
});
const publicSans = Public_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400","700","800"],
});

const AppWrapper = styled;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={publicSans.className}>
      <Component {...pageProps} />
    </div>
  );
}
