import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppContextProvider } from "@/context/app.context"
const client = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </QueryClientProvider>
  )
}
