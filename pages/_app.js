import "../styles/globals.css";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <Suspense fallback="loading.....">
      <SessionProvider session={pageProps.session}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </Suspense>
  );
}

export default appWithTranslation(MyApp);
