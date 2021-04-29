import '../styles/globals.css'
import Navbar from '../components/Navbar/Navbar'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/rootTheme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
