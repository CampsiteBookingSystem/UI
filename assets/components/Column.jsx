import styled from 'styled-components';

const Column = styled.div`
  width: ${props => props.amount && `calc(${100 / props.amount}% - 24px)`};
  margin: 12px 12px;
`;

export default Column;
