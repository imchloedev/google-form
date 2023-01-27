import React from 'react';
import OptionContainer from 'components/OptionContainer';
import { Container } from 'components/QuestionContainer/style';
import Dropdown from 'components/Questions/Dropdown';
import LongAnswer from 'components/Questions/LongAnswer';
import ShortAnswer from 'components/Questions/ShortAnswer';
import * as QUESTION_MENU from 'lib/questionMenu';

const ViewContainer = ({ questionId, question }) => {
  const { menuSelected, questionTitle, isRequired, options } = question;

  const isAnswer = value =>
    question.answers.findIndex(item => item === value) >= 0;

  const getOptionList = type => {
    const optionList = options.map(option => (
      <OptionContainer
        isAnswer={isAnswer(option.option)}
        key={option.id}
        questionId={questionId}
        option={option}
        optionId={option.id}
        optionContent={option.option}
        questionType={type}
        isLast={false}
      />
    ));

    return optionList;
  };

  const getQuestionContent = () => {
    switch (menuSelected) {
      case QUESTION_MENU.SHORT_ANSWER:
        return <ShortAnswer questionId={questionId} />;
      case QUESTION_MENU.LONG_ANSWER:
        return <LongAnswer questionId={questionId} />;
      case QUESTION_MENU.MULTIPLE_CHOICE:
      case QUESTION_MENU.CHECKBOX:
        return getOptionList(menuSelected);
      case QUESTION_MENU.DROPDOWN:
        return (
          <Dropdown
            question={question}
            questionId={questionId}
            options={options}
            isAnswer={isAnswer}
          />
        );
      default:
        return;
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
