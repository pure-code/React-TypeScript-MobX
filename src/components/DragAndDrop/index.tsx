import React from 'react';
import {useStore} from '../../hooks/use-store';
import {observer} from 'mobx-react';
import {AppState} from '../../stores';
import {Container, DragItem, DragList, DropItem, DropList, DragItemWrap} from "./styled";

const colors: string[] = ['red', 'orange', 'green', 'blue'];

interface StoreProps{
  setIsAnswerSelected(value: boolean): void;
  setIsCorrectAnswerSelected(value: boolean): void;
}

interface OwnProps {
  items: string[];
}

const DragAndDrop: React.FC<OwnProps> = ({items}) =>{

  const {
    setIsAnswerSelected,
    setIsCorrectAnswerSelected
  }: StoreProps = useStore((store: AppState) => (
    {
      setIsAnswerSelected: (value: boolean) => store.lessonStore.setIsAnswerSelected(value),
      setIsCorrectAnswerSelected: (value: boolean) => store.lessonStore.setIsCorrectAnswerSelected(value)
    }
  ));

  let draggedItem: HTMLSpanElement | null = null;

  const dragStart = (e: React.DragEvent<Element>) => {
    draggedItem = e.target as HTMLSpanElement;
  };

  const dragOver = (e: React.DragEvent<Element>) => {
    const t = e.target as HTMLDivElement;
    t.style.background = '#aaa';
    e.preventDefault();
    return false;
  };

  const drop = (e: React.DragEvent<Element>) => {
    const t = e.target as HTMLDivElement;
    t.style.background = '';
    if(draggedItem){
      t.appendChild(draggedItem);
    }
    e.preventDefault();
  };

  const dragEnter = (e: React.DragEvent<Element>) => {
    e.preventDefault();
  };

  const dragLeave = (e: React.DragEvent<Element>) => {
    const t = e.target as HTMLDivElement;
    t.style.background = '';
    e.preventDefault();
  };

  // tslint:disable-next-line:no-console
  console.log(setIsAnswerSelected, setIsCorrectAnswerSelected);

  return (
    <Container>
      <DropList>
        {
          items.map( item =>
            <DropItem
              onDragOver={ev => dragOver(ev)}
              onDrop={ev => drop(ev)}
              onDragEnter={ev => dragEnter(ev)}
              onDragLeave={ev => dragLeave(ev)}
              key={item}
            />)
        }
      </DropList>
      <DragList>
        {
          items.map( (item, i) =>
            <DragItemWrap key={item}>
              <DragItem
                onDragStart={ev => dragStart(ev)}
                draggable color={colors[i]}
              >
                {item}
              </DragItem>
            </DragItemWrap>)
        }
      </DragList>
    </Container>

  )};

export default observer(DragAndDrop);