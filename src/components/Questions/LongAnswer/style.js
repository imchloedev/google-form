import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ShortInput = styled.input`
  padding: 10px 0;
  background-color: transparent;
  border-bottom: ${({ pathname }) =>
    pathname === '/'
      ? `1px dotted rgba(0, 0, 0, 0.38)`
      : `1px solid rgba(0, 0, 0, 0.38)`};

  width: 100%;
`;
