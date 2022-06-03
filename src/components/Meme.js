import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {
  addToFavorites,
  downvote,
  removeFromFavorites,
  saveToLocalStorage,
  upvote
} from "../app/memesSlice";
import {useDispatch} from "react-redux";

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
  cursor: pointer;
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
  const {id, title, upvotes, downvotes, imgPath, favorite} = props.props;
  const dispatch = useDispatch();

  return (
    <MemeStyled>
      <MemTitleStyled>{title}</MemTitleStyled>
      <MemImageContainerStyled>
        <ImgStyled src={require(`../img/${imgPath}.jpg`)} alt="gówno"/>
      </MemImageContainerStyled>
      <ButtonsContainerStyled>
        <ButtonStyled onClick={() => {
          dispatch(upvote(id));
          dispatch(saveToLocalStorage());
        }}>{upvotes} NA TAK</ButtonStyled>
        <ButtonStyled onClick={() => {
          dispatch(downvote(id));
          dispatch(saveToLocalStorage());
        }}>{downvotes} NA NIE</ButtonStyled>
        {!favorite ? (<ButtonStyled onClick={() => {
          dispatch(addToFavorites(id));
          dispatch(saveToLocalStorage());
        }}>ADD TO FAVORITE</ButtonStyled>) : (<ButtonStyled onClick={() => {
          dispatch(removeFromFavorites(id));
          dispatch(saveToLocalStorage());
        }}>REMOVE FROM FAVORITE</ButtonStyled>)}
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
