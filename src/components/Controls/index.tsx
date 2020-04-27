import React from 'react';
import { observer} from 'mobx-react';
import {useStore} from '../../hooks/use-store';
import {AppState} from '../../stores';
import {
  Container,
  ControlBtn,
  ControlBtnWrap,
  Theory,
  Listen,
  NextTask,
  NextLesson,
} from './styled';

import taskSound from '../../helpers/sounds/sound.mp3';

interface StoreProps {
  setSelectedTask: (value: number) => void;
  setIsCorrectAnswer: (value: boolean) => void;
  setIsAnswerCheck: (value: boolean) => void;
  setIsLessonEnd: (value: boolean) => void;
  resetLesson: () => void;
  isAnswerSelected: boolean;
  isCorrectAnswer: boolean;
  isAnswerCheck: boolean;
  isCorrectAnswerSelected: boolean;
  isWrongAnswer: boolean;
  selectedTask: number;
  isLessonEnd: boolean;
  isMobile: boolean;
}

const Controls = () => {
  const {
    setIsCorrectAnswer,
    setIsAnswerCheck,
    setSelectedTask,
    resetLesson,
    setIsLessonEnd,
    isAnswerSelected,
    isCorrectAnswer,
    isAnswerCheck,
    isCorrectAnswerSelected,
    isWrongAnswer,
    selectedTask,
    isLessonEnd,
    isMobile,
  }: StoreProps = useStore((store: AppState) => (
    {
      setIsCorrectAnswer: (value: boolean) => store.lessonStore.setIsCorrectAnswer(value),
      setIsAnswerCheck: (value: boolean) => store.lessonStore.setIsAnswerCheck(value),
      setSelectedTask: (value: number) => store.lessonStore.setSelectedTask(value),
      setIsLessonEnd: (value: boolean) => store.lessonStore.setIsLessonEnd(value),
      resetLesson: () => store.lessonStore.resetLesson(),
      isAnswerSelected: store.lessonStore.isAnswerSelected,
      isCorrectAnswer: store.lessonStore.isCorrectAnswer,
      isAnswerCheck: store.lessonStore.isAnswerCheck,
      isCorrectAnswerSelected: store.lessonStore.isCorrectAnswerSelected,
      isWrongAnswer: store.lessonStore.isWrongAnswer,
      selectedTask: store.lessonStore.selectedTask,
      isLessonEnd: store.lessonStore.isLessonEnd,
      isMobile: store.viewStateStore.isMobile,
    }
  ));

  const getTitle = () => {
    if(isAnswerCheck && isCorrectAnswer){
      return 'Продолжить';
    } else if(isAnswerCheck && !isCorrectAnswer){
      return 'Решить ещё раз';
    }
    return 'Принять ответ';
  };

  const checkAnswer = () =>{
    if(isWrongAnswer){
      setIsAnswerCheck(false);
      return;
    }
    if(!isAnswerSelected){
      return;
    }
    setIsAnswerCheck(true);
    setIsCorrectAnswer(isCorrectAnswerSelected);
  };

  const switchTask = ()=> {
    setSelectedTask(selectedTask + 1);
    resetLesson();
  };

  const switchLesson = ()=> {
    setSelectedTask(1);
    setIsLessonEnd(false);
    resetLesson();
  };

  const audio = new Audio();
  audio.src = taskSound;
  const playSound = ()=> audio.play();

  return (
    <Container>
      <Theory>
        {
          isMobile ? null : 'Теория'
        }
      </Theory>
        <ControlBtnWrap>
          <ControlBtn
            isAnswerSelected={isAnswerSelected}
            isCorrectAnswer={isCorrectAnswer}
            isAnswerCheck={isAnswerCheck}
            onClick={ checkAnswer }
          >
            { getTitle() }
          </ControlBtn>
          {isAnswerCheck && isCorrectAnswer ?
            <NextTask onClick={()=> switchTask()}/>
            : null}
          {
            isAnswerCheck && isCorrectAnswer && isLessonEnd ?
              <NextLesson onClick={ ()=> switchLesson()} to='/tasks/lesson2'/>
              : null
          }
        </ControlBtnWrap>
      <Listen className='testSound' onClick={playSound}>
        {
          isMobile ? null : 'Прослушать'
        }
      </Listen>
    </Container>
  )};

export default observer(Controls);