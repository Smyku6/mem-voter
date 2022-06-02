import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const MemeStyled = styled.div`
  width: 500px;
  height: 500px;
  background-color: #68a9c5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3em;
`;

const MemTitleStyled = styled.div`
  font-size: 3em;
`;

const MemImageContainerStyled = styled.div`
  font-size: 3em;
  width: 400px;
  height: 300px;
  background-color: yellowgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const ButtonsContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 33%;
`;

const ImgStyled = styled.img`
  position: absolute;
  top: -9999px;
  left: -9999px;
  right: -9999px;
  bottom: -9999px;
  margin: auto;
`;


function Meme(props) {
  const {title, upvotes, downvotes, imgPath} = props.props;

  return (
    <MemeStyled>
      <MemTitleStyled>{title}</MemTitleStyled>
      <MemImageContainerStyled>
        <ImgStyled src={require(`../img/${imgPath}.jpg`)} alt="gówno"/>
      </MemImageContainerStyled>
      <ButtonsContainerStyled>
        <ButtonStyled>{upvotes} +</ButtonStyled>
        <ButtonStyled>{downvotes} -</ButtonStyled>
        <ButtonStyled>ADD TO FAVORITE</ButtonStyled>
      </ButtonsContainerStyled>
    </MemeStyled>
  );
}

Meme.propTypes = {
  title: PropTypes.string,
  upvotes: PropTypes.number,
  downvotes: PropTypes.number,
  imgPath: PropTypes.string
};

export default Meme;
