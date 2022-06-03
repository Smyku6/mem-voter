import Meme from './Meme'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const NoMemes = styled.div`
    color: yellow;
`

export const regularFilter = (meme) => meme.type === 'regular'
export const hotFilter = (meme) => meme.type === 'hot'
export const favoriteFilter = (meme) => meme.favorite

function MemesList({ type }) {
    let filteredMemes = useSelector((state) => state.memes.list)

    if (type === 'regular') {
        filteredMemes = filteredMemes.filter(regularFilter)
    } else if (type === 'hot') {
        filteredMemes = filteredMemes.filter(hotFilter)
    } else if (type === 'favorite') {
        filteredMemes = filteredMemes.filter(favoriteFilter)
    }

    return (
        <div>
            {filteredMemes.length === 0 ? (
                <NoMemes>No memes in this section</NoMemes>
            ) : (
                <>
                    {filteredMemes.map((meme, index) => (
                        <Meme key={index} props={meme} />
                    ))}
                </>
            )}
        </div>
    )
}

export default MemesList;
