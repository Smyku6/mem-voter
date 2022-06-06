import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MemeTitle from './MemeTitle'
import MemeImage from './MemeImage'
import COLOR from '../../constans/COLOR'
import ButtonVote from './ButtonVote'
import ButtonLike from './ButtonLike'

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

function Meme({ props }) {
    const { id, title, upvotes, downvotes, imgPath, favorite } = props

    return (
        <MemeContainer>
            <MemeTitle title={title} />
            <MemeImage imgPath={imgPath} />
            <ButtonContainer>
                <ButtonVote type="upvote" id={id} votes={upvotes} />
                <ButtonVote type="downvote" id={id} votes={downvotes} />

                <ButtonLike id={id} favorite={favorite} />
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
