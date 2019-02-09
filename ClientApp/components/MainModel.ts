import { Article } from './Article';
import {EventEmitter} from 'fbemitter';

export class MainModel {
	searchText:string;
	isLoading: boolean;
	page: number;
	records:Array<Article>;
	hasMore: boolean;
	
	constructor() {
		this.searchText = '';
		this.isLoading = false;
		this.records = [];
		this.page = 1;
		this.hasMore = false;
	};
	
}