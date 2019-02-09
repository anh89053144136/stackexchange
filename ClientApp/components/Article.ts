import {EventEmitter} from 'fbemitter';

export class Article {
	QuestionDate:Date;
	Title: string;
	Author: string;
	Link: string;
	constructor() {
		this.QuestionDate = new Date();
		this.Title = "";
		this.Author = "";
		this.Link = "";
	};
	
}