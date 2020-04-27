import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Account from '../Account';
import Lesson from '../Lesson';
import {useStore} from '../../hooks/use-store';
import {AppState} from "src/stores";

interface StoreProps{
  setIsEnterInCourse(value: boolean): void;
}

function App() {

  const {
    setIsEnterInCourse
  }: StoreProps = useStore((store: AppState): StoreProps => (
    {
      setIsEnterInCourse: (value: boolean): void => store.lessonStore.setIsEnterInCourse(value)
    }
  ));

  return (
    <Router>
      <Route >
        {({ location }) => (

          location.pathname.indexOf('tasks/lesson') !== -1 ? (
              <>
                {setIsEnterInCourse(true)}
                <Lesson lesson={location.pathname} />
              </>
            ) :
            <>
              {setIsEnterInCourse(false)}
              <Account />
            </>
        )}
      </Route>
    </Router>
  );
}

export default App;
