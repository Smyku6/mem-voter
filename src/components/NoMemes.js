import styled from 'styled-components'
import TXT from '../constans/TXT'
import COLOR from '../constans/COLOR'

const NoMemesStyled = styled.div`
    display: flex;
    color: ${COLOR.YELLOW};
    font-size: 2rem;
    justify-content: center;
    margin-top: 3rem;
`

const NoMemes = () => {
    return <NoMemesStyled>{TXT.NO_MEMES}</NoMemesStyled>
}

export default NoMemes
