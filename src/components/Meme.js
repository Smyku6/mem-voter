import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
    addToFavorites,
    downvote,
    removeFromFavorites,
    saveToLocalStorage,
    upvote,
} from '../app/memesSlice'
import { useDispatch } from 'react-redux'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'

const MemeStyled = styled.div`
    background-color: #3c3f41;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem;
    border-radius: 2rem;
`

const MemTitleStyled = styled.div`
    font-size: 3rem;
    padding: 1.5rem;
    color: #cc7832;
`

const MemImageContainerStyled = styled.div`
    font-size: 3em;
    width: 100%;
    background-color: #3c3f41;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    padding: 0 2rem;
    border-radius: 2rem;
`

const ButtonsContainerStyled = styled.div`
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

const ImgStyled = styled.img`
    width: 100%;
`

const upvoteStyle = { color: '#72af60', fontSize: '4em' }
const downvoteStyle = { color: '#c35364', fontSize: '4em' }
const likeStyle = { color: 'red', fontSize: '5em' }

function Meme(props) {
    const { id, title, upvotes, downvotes, imgPath, favorite } = props.props
    const dispatch = useDispatch()

    return (
        <MemeStyled>
            <MemTitleStyled>{title}</MemTitleStyled>
            <MemImageContainerStyled>
                <ImgStyled src={require(`../img/${imgPath}.jpg`)} alt="gówno" />
            </MemImageContainerStyled>
            <ButtonsContainerStyled>
                <ButtonStyled
                    onClick={() => {
                        dispatch(upvote(id))
                        dispatch(saveToLocalStorage())
                    }}
                >
                    <div style={upvoteStyle}>{upvotes}</div>
                    <BiUpvote style={upvoteStyle} />
                </ButtonStyled>
                <ButtonStyled
                    onClick={() => {
                        dispatch(downvote(id))
                        dispatch(saveToLocalStorage())
                    }}
                >
                    <div style={downvoteStyle}>{downvotes}</div>
                    <BiDownvote style={downvoteStyle} />
                </ButtonStyled>
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
            </ButtonsContainerStyled>
        </MemeStyled>
    )
}

Meme.propTypes = {
    title: PropTypes.string,
    upvotes: PropTypes.number,
    downvotes: PropTypes.number,
    imgPath: PropTypes.string,
}

export default Meme
