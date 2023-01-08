import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Wrapper = styled.div`
  .css-vqmohf-MuiButtonBase-root-MuiRadio-root {
    padding: 9px 9px 9px 0;
  }

  .editChoiceWrapper {
    display: flex;
    align-items: center;
  }

  .editChoiceWrapper {
    .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-11zohuh-MuiSvgIcon-root {
      fill: white;
    }
  }
`;

export const InputLabel = styled.input`
  font-size: 1rem;

  &::placeholder {
    color: ${theme.colors.black};
  }
`;
