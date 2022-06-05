import TXT from '../../constans/TXT'
import styled from 'styled-components'
import COLOR from '../../constans/COLOR'

const CounterTextStyled = styled.div`
    font-size: 1.5rem;
    color: ${COLOR.YELLOW2};
`

const CounterText = ({ count }) => {
    return (
        <CounterTextStyled>
            {count === 0 && ''}
            {count === 1 && `${count} ${TXT.MEME}`}
            {count > 1 && `${count} ${TXT.MEMES}`}
        </CounterTextStyled>
    )
}
export default CounterText
