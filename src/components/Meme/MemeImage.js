import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLOR from '../../constans/COLOR'

const MemImageContainerStyled = styled.div`
    font-size: 3em;
    width: inherit;
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

function MemeImage({ imgPath = 'no-image', title }) {
    let imgFromWebsite = false
    let imgFromPath = true
    if (imgPath.includes('.jpg') || imgPath.includes('.png')) {
        imgFromWebsite = true
        imgFromPath = false
    }

    return (
        <MemImageContainerStyled>
            {imgFromPath && (
                <ImgStyled
                    src={require(`../../img/${imgPath}.jpg`)}
                    alt={title}
                />
            )}

            {imgFromWebsite && <ImgStyled src={imgPath} alt={title} />}
        </MemImageContainerStyled>
    )
}

MemeImage.propTypes = {
    imgPath: PropTypes.string,
    title: PropTypes.string,
}

export default MemeImage
