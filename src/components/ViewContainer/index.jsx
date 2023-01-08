import React from 'react';
import OptionContainer from 'components/OptionContainer';
import LongAnswer from 'components/Questions/LongAnswer';
import ShortAnswer from 'components/Questions/ShortAnswer';
import { Container } from '../QuestionContainer/style';
import * as QUESTION_MENU from 'assets/data/QuestionMenu';

const ViewContainer = ({ questionId, question }) => {
  const getQuestionContent = () => {
    if (question.menuSelected === QUESTION_MENU.SHORT_ANSWER) {
      return <ShortAnswer questionId={questionId} />;
    } else if (question.menuSelected === QUESTION_MENU.LONG_ANSWER) {
      return <LongAnswer questionId={questionId} />;
    } else if (
      question.menuSelected === QUESTION_MENU.MULTIPLE_CHOICE ||
      question.menuSelected === QUESTION_MENU.CHECKBOX ||
      question.menuSelected === QUESTION_MENU.DROPDOWN
    ) {
      return (
        <OptionContainer
          question={question}
          questionId={questionId}
          questionType={question.menuSelected}
        />
      );
    }
  };

  return (
    <Container>
      <div className="topBar">
        <div>{question.questionTitle}</div>
      </div>

      <div className="questionContentContainer">
        <div className="viewContentContainer">{getQuestionContent()}</div>
      </div>
    </Container>
  );
};

export default ViewContainer;
