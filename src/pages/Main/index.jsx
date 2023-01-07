import React, { useState } from 'react';
import QuestionContainer from 'components/QuestionContainer';
import TitleContainer from 'components/TitleContainer';
import { useSelector } from 'react-redux';

const Main = () => {
  const formInfo = useSelector(state => state.form);
  const questions = useSelector(state => state.question);
  const [info, setInfo] = useState({
    title: formInfo.title,
    description: '',
  });

  const onChangeInfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    // console.log('hello');
  };

  return (
    <div>
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
