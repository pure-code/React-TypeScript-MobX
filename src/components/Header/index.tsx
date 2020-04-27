import React from 'react';
import { observer} from 'mobx-react';
import {useStore} from '../../hooks/use-store';
import {
  Container,
  GoHome,
  BreadCrumbs,
  Tab,
} from './styled';
import HomeIcon from '../../helpers/icons/home';
import Notification from "../Notification";
import {AppState} from '../../stores';

interface StoreProps{
  isCorrectAnswer: boolean;
  isAnswerCheck: boolean;
  selectedTask: number;

  setSelectedTask(item: number): void;
}

interface OwnProps {
  tabs: number;
}

const Header: React.FC<OwnProps> = ({ tabs }) => {
  const {
    isCorrectAnswer,
    isAnswerCheck,
    selectedTask,
    setSelectedTask,
  }: StoreProps = useStore((store: AppState): StoreProps => (
    {
      isCorrectAnswer: store.lessonStore.isCorrectAnswer,
      isAnswerCheck: store.lessonStore.isAnswerCheck,
      selectedTask: store.lessonStore.selectedTask,
      setSelectedTask: (value: number): void => store.lessonStore.setSelectedTask(value)
    }
  ));

  const tabsCount = (): number[] => {
    const tabsArr = [];
    for(let i = 0; i < tabs; i++){
      tabsArr.push(i + 1);
    }
    return tabsArr;
  };

  return (
    <Container>
      <GoHome to='/tasks'>
        <HomeIcon />
      </GoHome>
      <BreadCrumbs isCorrectAnswer={isAnswerCheck}>

        {tabsCount().map( (item, i): JSX.Element =>
          <Tab
            onClick={(): void => setSelectedTask(item)}
            key={i}
            active={selectedTask === item}
          >
            {item}
          </Tab>)}
        { isAnswerCheck ? <Notification isCorrectAnswer={isCorrectAnswer} /> : null}
      </BreadCrumbs>
    </Container>
  )
};

export default observer(Header);