import React from 'react'
import PropTypes from 'prop-types'
import {
    addToFavorites,
    removeFromFavorites,
    saveToLocalStorage,
} from '../../app/memesSlice'
import { useDispatch } from 'react-redux'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import COLOR from '../../constans/COLOR'
import { ButtonStyled } from './ButtonStyled'

const likeStyle = {
    color: `${COLOR.RED}`,
    fontSize: '3.5rem',
}

function ButtonLike({ id, favorite = false }) {
    const dispatch = useDispatch()

    return (
        <ButtonStyled
            onClick={() => {
                !favorite
                    ? dispatch(addToFavorites(id))
                    : dispatch(removeFromFavorites(id))
                dispatch(saveToLocalStorage())
            }}
        >
            {!favorite ? (
                <FcLikePlaceholder style={likeStyle} />
            ) : (
                <FcLike style={likeStyle} />
            )}
        </ButtonStyled>
    )
}

ButtonLike.propTypes = {
    id: PropTypes.string,
    favorite: PropTypes.bool,
}

export default ButtonLike
