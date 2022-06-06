import styled from 'styled-components'
import COLOR from '../constans/COLOR'
import TXT from '../constans/TXT'
import error404 from '../img/404_not_found.png'

const NoFoundStyled = styled.div`
    display: flex;
    flex-direction: column;

    color: ${COLOR.YELLOW};
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`

const NoFound = () => {
    return (
        <NoFoundStyled>
            <h1>{TXT.ERROR_404}</h1>
            <h1>{TXT.ERROR_PATH}</h1>
            <img src={error404} alt="" />
        </NoFoundStyled>
    )
}

export default NoFound
