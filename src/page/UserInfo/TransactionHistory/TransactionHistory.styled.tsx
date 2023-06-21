import styled from '@emotion/styled';

export const Container = styled.div`
  overflow-y: auto;
  height: 400px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 8px;
`;

export const TableConatainer = styled.table`
  width: 100%;

  text-align: center;
  background-color: #ffffff;
  overflow-y: auto;
  thead {
    background-color: rgb(66, 189, 213);
    color: #ffffff;
    font-size: 15px;
  }
  th,
  td {
    padding: 15px 0px;
  }

  tr:nth-of-type(2n) {
    background-color: rgb(237, 241, 245);
  }
`;
