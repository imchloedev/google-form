import React from 'react';
import TitleContainer from 'components/TitleContainer';
import { useSelector } from 'react-redux';

const View = () => {
  const formInfo = useSelector(state => state.form);

  return (
    <div>
      Preview
      <TitleContainer info={formInfo} />
    </div>
  );
};

export default View;
