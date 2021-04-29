import styled from 'styled-components'
import { Button } from '../components/Buttons'

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;

  .hero {
    width: 50%;
    text-align: center;
    
    h1 {
      font-size: 2.7rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    h5 {
      margin-top: 0;
      font-size: 1.5rem;
      font-weight: 300;
    }
  }
`

export default function Home() {
  return (
    <div>
      <Banner>
        <div className="hero">
          <h1>Good taste shouldn't be hard to find.</h1>
          <h5>Share your curations in a single place.</h5>
          <Button>Get Started</Button>
        </div>
      </Banner>
    </div>
  )
}
