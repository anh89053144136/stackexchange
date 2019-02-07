import { PlanetsTableState } from './PlanetsTableState';
import {EventEmitter} from 'fbemitter';

export class Article {
	QuestionDate:Date;
	Title: string;
	Author: string;
	constructor() {
		this.QuestionDate = new Date();
		this.Title = "";
		this.Author = "";
	};
	
}