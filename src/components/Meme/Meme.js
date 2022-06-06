import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
    addToFavorites,
    removeFromFavorites,
    saveToLocalStorage,
} from '../../app/memesSlice'
import { useDispatch } from 'react-redux'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import MemeTitle from './MemeTitle'
import MemeImage from './MemeImage'
import COLOR from '../../constans/COLOR'
import ButtonVote from './ButtonVote'

const MemeContainer = styled.div`
    background-color: ${COLOR.GRAY};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem;
    border-radius: 2rem;
`

const ButtonContainer = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const ButtonStyled = styled.div`
    display: flex;
    flex-direction: row;
    width: 100px;
    cursor: pointer;
    align-items: center;
`

const likeStyle = {
    color: `${COLOR.RED}`,
    fontSize: '5em',
}

function Meme({ props }) {
    const { id, title, upvotes, downvotes, imgPath, favorite } = props
    const dispatch = useDispatch()

    return (
        <MemeContainer>
            <MemeTitle title={title} />
            <MemeImage imgPath={imgPath} />
            <ButtonContainer>
                <ButtonVote type="upvote" id={id} votes={upvotes} />
                <ButtonVote type="downvote" id={id} votes={downvotes} />
                {!favorite ? (
                    <ButtonStyled
                        onClick={() => {
                            dispatch(addToFavorites(id))
                            dispatch(saveToLocalStorage())
                        }}
                    >
                        <FcLikePlaceholder style={likeStyle} />
                    </ButtonStyled>
                ) : (
                    <ButtonStyled
                        onClick={() => {
                            dispatch(removeFromFavorites(id))
                            dispatch(saveToLocalStorage())
                        }}
                    >
                        <FcLike style={likeStyle} />
                    </ButtonStyled>
                )}
            </ButtonContainer>
        </MemeContainer>
    )
}

Meme.propTypes = {
    title: PropTypes.string,
    upvotes: PropTypes.number,
    downvotes: PropTypes.number,
    imgPath: PropTypes.string,
}

export default Meme
