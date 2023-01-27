import React, { useState } from 'react';
import AsideMenu from 'components/AsideMenu';
import QuestionContainer from 'components/QuestionContainer';
import TitleContainer from 'components/TitleContainer';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { questionActions } from 'slices/questions';

const Main = () => {
  const formInfo = useSelector(state => state.form);
  const questions = useSelector(state => state.question);
  const [info, setInfo] = useState({
    title: formInfo.title,
    description: formInfo.description,
  });
  const dispatch = useDispatch();

  const onChangeInfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleChange = result => {
    if (!result.destination) {
      return;
    }

    dispatch(
      questionActions.reorderQuestion({
        firstIdx: result.source.index,
        secondIdx: result.destination.Index,
      })
    );
  };

  return (
    <div>
      <AsideMenu info={info} />
      <TitleContainer info={info} onChangeInfo={onChangeInfo} />
      <DragDropContext onDragEnd={handleChange}>
        <Droppable droppableId="droppable">
          {provided => (
            <div ref={provided.innerRef}>
              {questions.map((question, idx) => (
                <Draggable
                  key={question.id}
                  draggableId={question.id}
                  index={idx}
                >
                  {provided => {
                    return (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <QuestionContainer
                          key={question.id}
                          question={question}
                          questionId={question.id}
                          provided={provided}
                        />
                      </div>
                    );
                  }}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Main;
