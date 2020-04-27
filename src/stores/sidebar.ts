import {observable, action} from 'mobx';

class Sidebar{
  @observable isSidebarOpen = window.matchMedia('(min-width: 1180px)').matches;

  @action toggleSidebar(isSidebarOpen?: boolean){
    this.isSidebarOpen = isSidebarOpen ? isSidebarOpen : !this.isSidebarOpen;
  }

}

export default new Sidebar();
