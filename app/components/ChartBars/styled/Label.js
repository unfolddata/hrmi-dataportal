import styled from 'styled-components';

export default styled.div`
  position: absolute;
  font-size: 12px;
  height: 12px;
  line-height: 12px;
  display: table;
  text-align: center;
  color: ${({ theme }) => theme.global.colors.secondary};
  width: auto;
  white-space: nowrap;
`;
