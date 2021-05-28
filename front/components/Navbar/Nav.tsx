import styled from 'styled-components'

export default styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    @media screen and (max-width: 1000px) {
        padding: 0.5rem 1rem;
    }
`