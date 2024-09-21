import Layout from "@/Component/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
