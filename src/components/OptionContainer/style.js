import { makeStyles } from '@mui/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  /* .css-vqmohf-MuiButtonBase-root-MuiRadio-root,
  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root {
    padding: 9px 9px 9px 0;
  } */
  display: flex;
  align-items: center;

  .optionNumber {
    font-size: 14px;
    margin-right: 10px;
    padding: 10px 0;
  }

  .optionInput,
  .optionName {
    margin-left: 10px;
    font-size: 14px;
  }
`;

export const useStyles = makeStyles({
  root: {
    padding: '0 !important',
    margin: '10px 0 !important',
    '& input': {
      position: 'absolute !important',
    },
  },
  checked: {
    '& svg': {
      color: 'blue',
    },
  },
});
