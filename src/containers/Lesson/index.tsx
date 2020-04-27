import React from 'react';
import { observer} from 'mobx-react';
import Header from "../../components/Header";
import Controls from "../../components/Controls";
import lessons from '../../lessons';
import {useStore} from '../../hooks/use-store';
import {AppState} from '../../stores';

interface StoreProps{
  setIsLessonEnd: (value: boolean) => void;
  selectedTask: number;
}

interface OwnProps {
  lesson: string;
}

const LessonContainer: React.FC<OwnProps> = ({lesson}) => {

  const {
    selectedTask,
    setIsLessonEnd,
  }: StoreProps = useStore((store: AppState) => (
    {
      selectedTask: store.lessonStore.selectedTask,
      setIsLessonEnd: (value: boolean): void => store.lessonStore.setIsLessonEnd(value),
    }
  ));

  const lessonID = lesson.slice(lesson.indexOf('lesson'), lesson.length);
  const taskList = lessons[lessonID] || [];

  if(selectedTask === taskList.length){
    setIsLessonEnd(true);
  } else {
    setIsLessonEnd(false);
  }

  return (
    <>
      <Header tabs={taskList.length} />
      {
        taskList.map( (Task: React.FC, i: number) => +selectedTask === i + 1
          ?
            <Task key={i} />
          : null)
      }
      <Controls />
    </>
  )
};

export default observer(LessonContainer);