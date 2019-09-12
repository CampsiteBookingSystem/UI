import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -12px -12px 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Row;
