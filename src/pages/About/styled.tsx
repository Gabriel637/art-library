import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: black;
`;

export const Title = styled.h2`
  font-size: 40px;
  color: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const UserImage = styled.img`
  width: 200px;
  height: 300px;
`;

export const UserInfo = styled.div``;

export const InfoItem = styled.p`
  font-size: 24px;
  color: #ffffff;
`;
