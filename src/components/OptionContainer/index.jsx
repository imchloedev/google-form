import React from 'react';
import { FormGroup, FormControl, RadioGroup } from '@mui/material';
import CheckBox from 'components/Questions/CheckBox';
import Dropdown from 'components/Questions/Dropdown';
import MultipleChoice from 'components/Questions/MultipleChoice';
import * as QUESTION_MENU from 'lib/questionMenu';
import * as S from './style';

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
