import styled from 'styled-components'
import COLOR from '../../constans/COLOR'
import TXT from '../../constans/TXT'

const MenuTitleStyled = styled.div`
    font-size: 3rem;
    text-align: center;
    color: ${COLOR.YELLOW};
    margin: 2rem;
`

const MenuTitle = () => {
    return <MenuTitleStyled>{TXT.TITLE}</MenuTitleStyled>
}
export default MenuTitle
