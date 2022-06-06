import React from 'react'
import PropTypes from 'prop-types'
import { saveToLocalStorage, upvote, downvote } from '../../app/memesSlice'
import { useDispatch } from 'react-redux'
import { BiDownvote, BiUpvote } from 'react-icons/bi'
import COLOR from '../../constans/COLOR'
import { ButtonStyled } from './ButtonStyled'

const upvoteStyle = {
    color: `${COLOR.GREEN}`,
    fontSize: '4em',
}
const downvoteStyle = {
    color: `${COLOR.RED_LIGHT}`,
    fontSize: '4em',
}

function ButtonVote({ type, id, votes }) {
    const dispatch = useDispatch()
    console.log(type)
    if (type === 'upvote') {
        return (
            <ButtonStyled
                onClick={() => {
                    dispatch(upvote(id))
                    dispatch(saveToLocalStorage())
                }}
            >
                <div style={upvoteStyle}>{votes}</div>
                <BiUpvote style={upvoteStyle} />
            </ButtonStyled>
        )
    } else if (type === 'downvote') {
        return (
            <ButtonStyled
                onClick={() => {
                    dispatch(downvote(id))
                    dispatch(saveToLocalStorage())
                }}
            >
                <div style={downvoteStyle}>{votes}</div>
                <BiDownvote style={downvoteStyle} />
            </ButtonStyled>
        )
    }
}

ButtonVote.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    votes: PropTypes.number,
}

export default ButtonVote
