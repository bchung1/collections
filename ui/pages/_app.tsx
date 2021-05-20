import '../styles/globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/rootTheme'
import styled from 'styled-components'
import { Provider as NextAuthProvider } from 'next-auth/client'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

function MyApp({ Component, pageProps }) {
  return (
      <NextAuthProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
            <Container>
              <Navbar/>
              <Component {...pageProps} />
              <Footer />
            </Container>
        </ThemeProvider>
      </NextAuthProvider>
  )
}

export default MyApp
