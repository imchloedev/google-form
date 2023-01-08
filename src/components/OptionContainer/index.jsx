import React from 'react';
import {
  FormGroup,
  FormControl,
  RadioGroup,
  Radio,
  Checkbox,
} from '@mui/material';
import CheckBox from 'components/Questions/CheckBox';
import Dropdown from 'components/Questions/Dropdown';
import { useLocation } from 'react-router-dom';
import * as QUESTION_MENU from '../../assets/data/QuestionMenu';
import MultipleChoice from '../Questions/MultipleChoice';
import * as S from './style';

const OptionContainer = ({ question, questionType, questionId }) => {
  const { pathname } = useLocation();

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

  // const handleAddOptionContent = () => {
  //   if (questionType === QUESTION_MENU.MULTIPLE_CHOICE) {
  //     return (
  //       <div className="addRadioWrapper">
  //         <Radio disabled />
  //         <div>옵션 추가 또는 기타 추가</div>
  //       </div>
  //     );
  //   } else if (questionType === QUESTION_MENU.CHECKBOX) {
  //     return (
  //       <div className="addCheckboxWrapper">
  //         <Checkbox disabled />
  //         <div>옵션추가</div>
  //       </div>
  //     );
  //   } else if (questionType === QUESTION_MENU.DROPDOWN) {
  //     return (
  //       <div className="addDropWrapper">
  //         <div>옵션추가</div>
  //       </div>
  //     );
  //   }
  // };

  return <S.Wrapper>{getOptionList()}</S.Wrapper>;
};

export default OptionContainer;
