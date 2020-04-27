import { configure } from 'mobx';
import lesson from "./lesson";
import sidebar from "./sidebar";
import viewState from "./viewState";

configure({ enforceActions: 'always' });

const Store = {
	lessonStore: lesson,
	sidebarStore: sidebar,
	viewStateStore: viewState,
};

export type AppState = typeof Store;

export default Store;