import styled from 'styled-components'
import COLOR from '../../constans/COLOR'
import { NavLink } from 'react-router-dom'
import {
    sectionCounter,
    sectionTitleAndIcon,
    sectionUrl,
} from './MenuButtonTools'
import CounterText from './CounterText'

const MenuButtonStyled = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
    margin: 1rem 2rem;
    background-color: ${COLOR.BLUE};
    color: ${COLOR.LIME};
    border-radius: 1.5rem;
    width: 70%;
    height: 12rem;
    font-size: 2.5rem;
    text-decoration: none;

    &:hover {
        background-color: ${COLOR.BLUE_HOVER};
    }
`

const MenuButton = ({ section }) => {
    const url = sectionUrl(section)
    const TitleAndIcon = sectionTitleAndIcon(section)
    const count = sectionCounter(section)

    return (
        <MenuButtonStyled to={url}>
            {TitleAndIcon}
            <CounterText count={count} />
        </MenuButtonStyled>
    )
}

export default MenuButton
