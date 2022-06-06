import TYPE from '../../constans/TYPE'
import TXT from '../../constans/TXT'
import { AiOutlineFire } from 'react-icons/ai'
import { IoMdHeartEmpty } from 'react-icons/io'
import { IoCreate } from 'react-icons/io5'
import { TbMoodCrazyHappy } from 'react-icons/tb'
import { useSelector } from 'react-redux'
import {
    favoriteFilter,
    hotFilter,
    regularFilter,
} from '../MemesList/memeFilter'

export const sectionUrl = (section) => {
    switch (section) {
        case TYPE.HOT:
            return '/hot'
        case TYPE.FAVORITE:
            return '/favorite'
        case TYPE.REGULAR:
            return '/regular'
        case TYPE.MEME_FORM:
            return '/meme-form'
        default:
            return '/'
    }
}

export const sectionTitleAndIcon = (section) => {
    switch (section) {
        case TYPE.HOT:
            return (
                <div>
                    {TXT.HOT} <AiOutlineFire />
                </div>
            )
        case TYPE.FAVORITE:
            return (
                <div>
                    {TXT.FAVORITE} <IoMdHeartEmpty />
                </div>
            )
        case TYPE.MEME_FORM:
            return (
                <div>
                    {TXT.MEME_FORM} <IoCreate />
                </div>
            )
        case TYPE.REGULAR:
        default:
            return (
                <div>
                    {TXT.REGULAR} <TbMoodCrazyHappy />
                </div>
            )
    }
}

export const sectionCounter = (section) => {
    switch (section) {
        case TYPE.HOT:
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useSelector((state) => state.memes.list).filter(hotFilter)
                .length
        case TYPE.FAVORITE:
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useSelector((state) => state.memes.list).filter(
                favoriteFilter
            ).length
        case TYPE.MEME_FORM:
            break
        case TYPE.REGULAR:
        default:
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useSelector((state) => state.memes.list).filter(
                regularFilter
            ).length
    }
}
