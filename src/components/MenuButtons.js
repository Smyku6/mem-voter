import SECTIONS from '../constans/SECTIONS'
import MenuButton from './MenuButton/MenuButton'

const MenuButtons = ({ section }) => {
    return (
        <>
            {SECTIONS.map((section, index) => (
                <MenuButton key={index} section={section} />
            ))}
        </>
    )
}

export default MenuButtons
