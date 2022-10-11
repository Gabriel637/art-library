import styled from 'styled-components';
import devices from '../../styles/devices';

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: black;
  padding: 20px 0;
  gap: 30px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-direction: column;

  @media ${devices.desktop} {
    flex-direction: row;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  color: #ffffff;
  font-family: 'Amatic SC';
`;
