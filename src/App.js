import './App.css';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const Title = styled.div`
  font-size: 3em;
  margin: 2em;
  text-align: center;
  color: #E8BF6A;
`;

const LeftMenu = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #3C3F41;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppStyled = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #3C3F41;

`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 1em;
  margin: 2em;
  width: 200px;
  height: 200px;
  background-color: yellow;
`;


function App() {
  return (
    <AppStyled>
      <LeftMenu>
        <Title>MEM VOTER SITE</Title>
        <StyledNavLink to="/hot">HOT</StyledNavLink>
        <StyledNavLink to="/regular">REGULAR</StyledNavLink>
      </LeftMenu>
    </AppStyled>
  );
}

export default App;
