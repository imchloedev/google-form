import styled from 'styled-components';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid #dadce0;
  border-radius: 8px;
  overflow: hidden;

  .divider {
    display: block;
    background-color: ${theme.colors.blue};
    height: 10px;
  }

  > div {
    padding: 24px;
  }

  .editContainer {
    input {
      display: block;
      width: 100%;

      &:first-child {
        font-size: 32px;
        margin-bottom: 10px;

        &::placeholder {
          font-size: 32px;
        }
      }

      &:last-child {
        font-size: 16px;

        &::placeholder {
          font-size: 16px;
        }
      }

      &::placeholder {
        color: #555;
      }
    }
  }

  .viewContainer {
    .viewTitle {
      font-size: 32px;
      margin-bottom: 10px;
    }

    .viewDescription {
      font-size: 16px;
    }

    .resultMessage {
      margin: 24px 0;
    }

    .backLink {
      color: ${theme.colors.blue};
      text-decoration: underline;
    }
  }
`;
