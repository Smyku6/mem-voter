import Meme from '../Meme/Meme'
import { useSelector } from 'react-redux'
import NoMemes from '../ErrorBoundaries/NoMemes'
import memeFilter from './memeFilter'
import styled from 'styled-components'

const MemesListStyled = styled.div`
    width: 100%;
    padding: 0 10rem;
`

function MemesList({ section }) {
    const memesList = useSelector((state) => state.memes.list)
    const filteredMemes = memeFilter(section, memesList)

    return (
        <MemesListStyled>
            {filteredMemes.length === 0 ? (
                <NoMemes />
            ) : (
                <>
                    {filteredMemes.map((meme, index) => (
                        <Meme key={index} props={meme} />
                    ))}
                </>
            )}
        </MemesListStyled>
    )
}

export default MemesList
