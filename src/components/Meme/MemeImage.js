import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLOR from '../../constans/COLOR'

const MemImageContainerStyled = styled.div`
    font-size: 3em;
    width: 800px;
    background-color: ${COLOR.GRAY};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    padding: 0 2rem;
    border-radius: 2rem;
`
const ImgStyled = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`

function MemeImage({ imgPath }) {
    return (
        <MemImageContainerStyled>
            <ImgStyled
                src={require(`../../img/${imgPath}.jpg`)}
                alt="Image problem"
            />
        </MemImageContainerStyled>
    )
}

MemeImage.propTypes = {
    imgPath: PropTypes.string,
}

export default MemeImage
