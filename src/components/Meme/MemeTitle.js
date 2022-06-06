import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLOR from '../../constans/COLOR'

const MemeTitleStyled = styled.div`
    font-size: 3rem;
    padding: 1.5rem;
    color: ${COLOR.ORANGE};
`

function MemeTitle({ title }) {
    return <MemeTitleStyled>{title}</MemeTitleStyled>
}

MemeTitle.propTypes = {
    title: PropTypes.string,
}

export default MemeTitle
