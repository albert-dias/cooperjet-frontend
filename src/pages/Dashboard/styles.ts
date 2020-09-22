import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
`;

export const Limitation = styled.div`
  max-width: 960px;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px;

  h1{
    color: #ff5100;
    font-family: Ubuntu;
    width: 100%;
    text-align: center;
    margin-bottom:30px;
  }
`;
export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 450px;
  min-width: 400px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;

  @media (max-width: 939px){
      justify-content: center;
      max-width: 100%;
    }

  h2{
    color: #fff;
    font-family: Ubuntu;
    margin-bottom: 10px;
    font-weight: 400;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 18px;

    @media (max-width: 940px){
      max-width: 550px;
      min-width: 400px;
      width: 100%;
    }
  }
  .Pending{
    background:#BBA21D;
  }
  .Progress{
    background:#686DF1;
  }
  .Success{
    background:#83F168;
  }
  .Canceled{
    background:#F16868;
  }
`;
export const Todos = styled.div`
  background:#fff;
  border-radius: 4px;
  overflow: scroll;
  flex: 1;
  max-width: 450px;
  min-width: 400px;
  width: 100%;
  height: 700px;
  padding: 10px 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;

export const Todo = styled.div`
  display: flex;
  background: #ddd;
  padding: 10px;
  flex-direction: column;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  span{
    font-family: Ubuntu;
    font-weight: 500;
    margin-bottom: 5px;
    font-size: 14px;
  }

  hr{
    margin: 10px 0;
  }
`;

export const Row = styled.div`
  display: flex;

  &.Buttoms{
    justify-content: flex-end;
  }

  p{
    font-size: 12px;
    font-family: Ubuntu;
    font-weight: 400;
    margin-bottom: 5px;
  }
  strong{
    font-weight:500;
  }

  button{
    max-width: 40%;
    width: 100%;
    flex: 1;
    padding: 6px;
    border:none;
    color: #fff;
    font-family: Ubuntu;
    border-radius:4px;
  }

  .Cancel{
    background:#7A0000;
    margin-right: 20px;
  }

  .Confirm{
    background:#00367A;
  }
`;

export const Cel = styled.div`
  display: flex;
  width: 50%;
`;
