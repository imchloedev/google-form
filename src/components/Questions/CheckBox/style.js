import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Wrapper = styled.div`
  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root {
    padding: 9px 9px 9px 0;
  }

  .editCheckboxWrapper {
    display: flex;
    align-items: center;
  }
`;

export const InputLabel = styled.input`
  font-size: 1rem;

  &::placeholder {
    color: ${theme.colors.black};
  }
`;
