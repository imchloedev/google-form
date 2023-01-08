import React from 'react';
import { FormGroup, FormControl, RadioGroup } from '@mui/material';
import CheckBox from 'components/Questions/CheckBox';
import Dropdown from 'components/Questions/Dropdown';
import MultipleChoice from 'Questions/MultipleChoice';
import * as S from './style';
import * as QUESTION_MENU from 'assets/data/QuestionMenu';

const OptionContainer = ({ question, questionType, questionId }) => {
  const getOptionList = () => {
    if (questionType === QUESTION_MENU.MULTIPLE_CHOICE) {
      return (
        <FormControl>
          <RadioGroup>
            {question.options.map(option => (
              <MultipleChoice
                key={option.id}
                questionId={questionId}
                option={option}
                optionId={option.id}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
    } else if (questionType === QUESTION_MENU.CHECKBOX) {
      return (
        <FormGroup>
          {question.options.map(option => (
            <CheckBox
              key={option.id}
              option={option}
              optionId={option.id}
              questionId={questionId}
            />
          ))}
        </FormGroup>
      );
    } else if (questionType === QUESTION_MENU.DROPDOWN) {
      return (
        <Dropdown
          question={question}
          questionId={questionId}
          options={question.options}
        />
      );
    }
  };

  return <S.Wrapper>{getOptionList()}</S.Wrapper>;
};

export default OptionContainer;
