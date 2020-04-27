import {observable, action, computed, autorun} from 'mobx';

class Lesson{

  constructor(){
    autorun(()=>{
      if(!this.isEnterInCourse){
        this.resetLesson();
        this.resetCourse();
      }
    });
  }

  @observable isCorrectAnswer: boolean = false;
  @observable isAnswerCheck: boolean = false;
  @observable isAnswerSelected: boolean = false;
  @observable isCorrectAnswerSelected: boolean = false;
  @observable selectedTask: number = 1;
  @observable isLessonEnd: boolean = false;
  @observable isEnterInCourse: boolean = false;

  @action setSelectedTask(selectedTask: number){
    this.selectedTask = selectedTask;
  }

  @action setIsCorrectAnswerSelected(isCorrectAnswerSelected: boolean){
    this.isCorrectAnswerSelected = isCorrectAnswerSelected;
  }

  @action setIsCorrectAnswer(isCorrectAnswer: boolean){
    this.isCorrectAnswer = isCorrectAnswer;
  }

  @action setIsAnswerCheck(isAnswerCheck: boolean){
    this.isAnswerCheck = isAnswerCheck;
  }

  @action setIsAnswerSelected(isAnswerSelected: boolean){
    this.isAnswerSelected = isAnswerSelected;
  }

  @action resetLesson(){
    this.setIsCorrectAnswer(false);
    this.setIsCorrectAnswerSelected(false);
    this.setIsAnswerCheck(false);
    this.setIsAnswerSelected(false);
  }

  @action resetCourse(){
    this.setSelectedTask(1);
  }

  @action setIsLessonEnd(isLessonEnd: boolean){
    this.isLessonEnd = isLessonEnd;
  }

  @action setIsEnterInCourse(isEnterInCourse: boolean){
    this.isEnterInCourse = isEnterInCourse;
  }

  @computed get isWrongAnswer(){
    return this.isAnswerCheck && !this.isCorrectAnswer;
  }

}

export default new Lesson();
