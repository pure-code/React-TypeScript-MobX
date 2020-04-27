import { observable, action } from 'mobx';

class Settings{
  constructor(){
    window.addEventListener('resize', ()=>{
      const isMobile = window.matchMedia('(max-width: 767px)').matches;

      if(isMobile && !this.isMobile){
        this.setIsMobile(isMobile);
      }

      if(!isMobile && this.isMobile){
        this.setIsMobile(isMobile);
      }
    });
  }
  @observable isMobile = window.matchMedia('(max-width: 767px)').matches;
  @observable navHeight = this.isMobile ? '80px' : '100%';

  @action setIsMobile(isMobile: boolean){
    this.isMobile = isMobile;
    this.setNavHeight();
  }

  @action setNavHeight(){
    this.navHeight = this.isMobile ? '80px' : '100%';
  }

}

export default new Settings();
