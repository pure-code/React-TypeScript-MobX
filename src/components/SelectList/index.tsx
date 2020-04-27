import React, {useState} from 'react';
import {useStore} from '../../hooks/use-store';
import { observer} from 'mobx-react';
import {AppState} from '../../stores';
import {
  List,
  Select,
  Pic,
} from "./styled";

interface StoreProps{
  setIsAnswerSelected(value: boolean): void;
  setIsCorrectAnswerSelected(value: boolean): void;
}

interface OwnProps {
  items: string[];
  rightAnswer: number;
}

const SelectList: React.FC<OwnProps> = ({items, rightAnswer}) =>{

  const {
    setIsAnswerSelected,
    setIsCorrectAnswerSelected
  }: StoreProps = useStore((store: AppState) => (
    {
      setIsAnswerSelected: (value: boolean) => store.lessonStore.setIsAnswerSelected(value),
      setIsCorrectAnswerSelected: (value: boolean) => store.lessonStore.setIsCorrectAnswerSelected(value)
    }
  ));
  const [selectedItem, setSelectedItem] = useState(-1);
  const onClickHandler = (selectAnswer: number) => {
    setSelectedItem(selectAnswer);
    setIsCorrectAnswerSelected(selectAnswer + 1 === rightAnswer);
    setIsAnswerSelected(true);
  };

  return (
    <List>
      {items.map( (item, i) =>
        <Select
          key={i}
          onClick={ () => onClickHandler(i)}
          selected={i === +selectedItem}>
          <Pic src={item} />
        </Select>)}
    </List>

  )};

export default observer(SelectList);