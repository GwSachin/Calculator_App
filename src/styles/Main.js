import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
 
  width: 330px;
  margin: 40px auto;
  grid-template-columns: repeat(4, 84px);
  grid-template-rows: minmax(100px, auto) repeat(5, 84px);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;
`;

export const Screen = styled.div`
  grid-column: 1 / -1;

  display: flex;
  background: #30343f;


  justify-content: space-around;
  flex-direction: column;
  padding: 10x;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Prevoius = styled.div`
  color: white;
  font-size: 1.3rem;
`;

export const Current = styled.div`
  color: white;
  padding:10px;
  font-size: 2.3rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  border: 1px outset white;
  background-color: #30343f;
  color: white;
  &:hover {
    background-color: #272932;
  }
  ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan} ;`;
    }
  }};
  ${({ operation }) => operation && `background-color:#ff9e00; color:white`};
  ${({ control }) => control && `background-color:#3c6e71;`};
  ${({ equals }) =>
    equals && `background-color:#ff9e00;border-bottom-right-radius:10px;`};
  ${({ decimal }) =>
    decimal && `background-color:#ff9e00;border-bottom-left-radius:10px;`};
`;
