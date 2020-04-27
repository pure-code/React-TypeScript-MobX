import React from 'react';
import { observer} from 'mobx-react';
import {
	Container,
	LessonDescription,
	DisableLesson,
} from "./styled";
import {useStore} from '../../hooks/use-store';
import {AppState} from '../../stores';

interface StoreProps{
  isWrongAnswer: boolean;
  isCorrectAnswer: boolean;
}

interface OwnProps {
	description: string;
}

const TaskContainer: React.FC<OwnProps> = ({children, description}) => {

  const {
    isWrongAnswer,
    isCorrectAnswer
  }: StoreProps = useStore((store: AppState) => (
    {
      isWrongAnswer: store.lessonStore.isWrongAnswer,
      isCorrectAnswer: store.lessonStore.isCorrectAnswer
    }
  ));
	return (
	<Container>
		<LessonDescription>{description}</LessonDescription>
		{children}
		{
			isWrongAnswer || isCorrectAnswer ? <DisableLesson /> : null
		}
	</Container>
)};

export default observer(TaskContainer);