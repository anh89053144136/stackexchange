import { Article } from './Article';
import {EventEmitter} from 'fbemitter';

export class MainModel {
	searchText:string;
	isLoading: boolean;
	records:Array<Article>;
	constructor() {
		this.searchText = '';
		this.isLoading = false;
		this.records = [];
	};
	
}