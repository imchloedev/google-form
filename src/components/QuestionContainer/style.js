import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  position: relative;
  margin-top: 12px;
  background-color: ${theme.colors.white};
  border: 1px solid #dadce0;
  border-radius: 8px;

  .topBar {
    padding: 14px 24px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 34px;
  }

  .questionTitle {
    width: 100%;
    height: 56px;
    background-color: #eee;
    padding: 16px;
    font-size: 16px;
    border-bottom: 2px solid ${theme.colors.blue};
  }

  .divider {
    display: block;
    width: 1px;
    height: 32px;
    background-color: #dadce0;
    margin: 0 16px;
  }

  .questionContentContainer {
    padding: 0 24px;
    margin: 14px 0 40px 0;
  }

  .bottomBar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    border-top: 1px solid #dadce0;
    padding: 14px 24px;
  }

  .iconWrapper {
    position: relative;
    cursor: pointer;
    z-index: 2;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0px;
      height: 0px;
      background-color: #eee;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      transition: 0.2s;
    }

    &:hover::after {
      width: 24px;
      height: 24px;
    }
  }

  .css-1f2kvjf-MuiFormControlLabel-root {
    margin: 0;
  }
`;
