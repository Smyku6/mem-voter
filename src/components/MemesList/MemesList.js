import Meme from '../Meme/Meme'
import { useSelector } from 'react-redux'
import NoMemes from '../ErrorBoundaries/NoMemes'
import memeFilter from './memeFilter'

function MemesList({ section }) {
    const memesList = useSelector((state) => state.memes.list)
    const filteredMemes = memeFilter(section, memesList)

    return (
        <div>
            {filteredMemes.length === 0 ? (
                <NoMemes />
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

export default MemesList
