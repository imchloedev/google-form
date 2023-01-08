import styled from 'styled-components';

export const Wrapper = styled.div`
  .dropdownList {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
  }

  .dropdownListInput {
    margin-top: 4px;
    font-size: 1rem;

    &::placeholder {
      color: black;
    }
  }
`;
