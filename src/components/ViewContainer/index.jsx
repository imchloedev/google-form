import React from 'react';
import OptionContainer from 'components/OptionContainer';
import { Container } from 'components/QuestionContainer/style';
import LongAnswer from 'components/Questions/LongAnswer';
import ShortAnswer from 'components/Questions/ShortAnswer';
import * as QUESTION_MENU from 'assets/data/QuestionMenu';

const ViewContainer = ({ questionId, question }) => {
  const { menuSelected, questionTitle, isRequired } = question;

  const getQuestionContent = () => {
    if (menuSelected === QUESTION_MENU.SHORT_ANSWER) {
      return <ShortAnswer questionId={questionId} isRequired={isRequired} />;
    } else if (menuSelected === QUESTION_MENU.LONG_ANSWER) {
      return <LongAnswer questionId={questionId} />;
    } else if (
      menuSelected === QUESTION_MENU.MULTIPLE_CHOICE ||
      menuSelected === QUESTION_MENU.CHECKBOX ||
      menuSelected === QUESTION_MENU.DROPDOWN
    ) {
      return (
        <OptionContainer
          question={question}
          questionId={questionId}
          questionType={menuSelected}
        />
      );
    }
  };

  return (
    <Container>
      <div className="topBar">
        <div>
          {questionTitle}
          {isRequired && <span className="isRequired">*</span>}
        </div>
      </div>
      <div className="questionContentContainer">
        <div className="viewContentContainer">{getQuestionContent()}</div>
      </div>
    </Container>
  );
};

export default ViewContainer;
