import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  flex-direction: column;
  background-color: black;
`;

export const Title = styled.span`
  font-size: 40px;
  color: #ffffff;
  font-family: 'Amatic SC';
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const UserContainer = styled.div`
  display: flex;
  width: 60%;
  gap: 50px;
  height: 250px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const UserImage = styled.img`
  width: 250px;
  height: 250px;
`;

export const UserInfo = styled.div`
  max-height: 300px;
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 10px;
`;

export const InfoItem = styled.span`
font - size: 14px;
color: #ffffff;
`;
