import React, { useState } from 'react';
import AsideMenu from 'components/AsideMenu';
import QuestionContainer from 'components/QuestionContainer';
import TitleContainer from 'components/TitleContainer';
import { useSelector } from 'react-redux';

const Main = () => {
  const formInfo = useSelector(state => state.form);
  const questions = useSelector(state => state.question);
  const [info, setInfo] = useState({
    title: formInfo.title,
    description: formInfo.description,
  });

  const onChangeInfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div>
      <AsideMenu info={info} />
      <TitleContainer info={info} onChangeInfo={onChangeInfo} />
      {questions.map(question => (
        <QuestionContainer
          key={question.id}
          question={question}
          questionId={question.id}
        />
      ))}
    </div>
  );
};

export default Main;
