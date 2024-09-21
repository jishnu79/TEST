import Layout from "@/Component/Layout";
import { store } from "@/Redux/Store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
