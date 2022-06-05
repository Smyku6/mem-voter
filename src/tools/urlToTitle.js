import TXT from '../constans/TXT'

const urlToTitle = (url) => {
    switch (url) {
        case '/hot':
            return TXT.SECTION_HOT
        case '/favorite':
            return TXT.SECTION_FAVORITE
        case '/regular':
        default:
            return TXT.SECTION_REGULAR
    }
}

export default urlToTitle
