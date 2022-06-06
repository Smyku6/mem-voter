import styled from 'styled-components'
import COLOR from '../../constans/COLOR'

const SectionBarStyled = styled.div`
    position: fixed;
    height: 8rem;
    width: inherit;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${COLOR.BLUE};
    color: ${COLOR.YELLOW2};
    top: 0;
    padding-left: 25rem;
    z-index: 1;
    font-size: 3rem;
`

const SectionBar = ({ text }) => {
    return <SectionBarStyled>{text}</SectionBarStyled>
}
export default SectionBar
