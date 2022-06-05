import TYPE from '../../constans/TYPE'

export const regularFilter = (meme) => meme.type === `${TYPE.REGULAR}`
export const hotFilter = (meme) => meme.type === `${TYPE.HOT}`
export const favoriteFilter = (meme) => meme.favorite

const memeFilter = (section, memesList) => {
    switch (section) {
        case TYPE.HOT:
            return memesList.filter(hotFilter)
        case TYPE.FAVORITE:
            return memesList.filter(favoriteFilter)
        case TYPE.REGULAR:
        default:
            return memesList.filter(regularFilter)
    }
}

export default memeFilter
