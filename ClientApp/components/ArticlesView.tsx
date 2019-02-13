import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AutoRenewIcon from '@material-ui/icons/AutoRenew';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';

import { MainModel } from './MainModel';

const loading_container = {
	textAlign: "center"
} as React.CSSProperties;

export class ArticlesView extends React.Component<RouteComponentProps<{}>, MainModel> {

	constructor(props: any) {
        super(props);
        this.state = { 
			searchText: '', 
			isLoading: false, 
			page: 1,
			records: [],
			hasMore: false,
			errorMessageOpen: false
		};
    }

    public render() {
		let tableBody = <TableBody>
				<TableRow>
					<TableCell colSpan={3}>
						<div style={loading_container}>
							There is no data
						</div>
					</TableCell>
				</TableRow>
			</TableBody>;
			
		if (this.state.isLoading == true) {
			tableBody = <TableBody>
				<TableRow>
					<TableCell colSpan={3}>
						<div style={loading_container}>
							<CircularProgress />
						</div>
					</TableCell>
				</TableRow>
			</TableBody>;
		}
		
		if (this.state.records.length > 0) {
			tableBody = <TableBody>
				  {this.state.records.map(row => {
					var questionDate = row.QuestionDate?row.QuestionDate.toISOString().slice(0,10):"";
					
					return (
					  <TableRow key={row.Title}>
						<TableCell component="th" scope="row">
						  {questionDate}
						</TableCell>
						<TableCell>
							<a href={row.Link}>{row.Title}</a>
						</TableCell>
						<TableCell>{row.Author}</TableCell>
					  </TableRow>
					);
				  })}
				</TableBody>;
		}
		let appendButton =  this.state.hasMore == true ? <div style={loading_container}>
										<Button variant="fab" onClick={() => this.handleAppend()}>
											<AutoRenewIcon />
										</Button>
									</div> : <div></div>;
		
        return <div style={{ textAlign: 'center' }}>
					<TextField
					  id="fd-SearchText"
					  label="Search text"
					  value={this.state.searchText}
					  margin="normal"
					  onChange={(e) => this.handleSearchText(e)}
					  onKeyPress={(e) => {if(e.key === 'Enter') { this.handleSearch()}}}/>
					<Button variant="fab" onClick={() => this.handleSearch()} >
						<SearchIcon />
					</Button>
					<br/>
					<Table>
						<TableHead>
						  <TableRow>
							<TableCell>
								Question date
							</TableCell>
							<TableCell>
								Title
							</TableCell>
							<TableCell numeric>
								Author
							</TableCell>
							<TableCell></TableCell>
						  </TableRow>
						</TableHead>
						{ tableBody }
						<TableFooter>
							<TableRow>
								<TableCell colSpan={3}>
									{appendButton}
								</TableCell>
							</TableRow>
						</TableFooter>
					</Table>
					<Snackbar
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						open={this.state.errorMessageOpen}
						autoHideDuration={6000}
						onClose={(event, reason) => this.handleClose(event, reason)}
						ContentProps={{
							'aria-describedby': 'message-id',
						}}
						message={<span id="message-id">There is sothing wrang!</span>}
						action={[
							<IconButton key="close" aria-label="Close" color="inherit" onClick={(event) => this.handleClose(event, null)}>
								<CloseIcon />
							</IconButton>,
						]}
					/>
				</div>;
    }
	
	public handleClose = (event: any, reason: any) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ errorMessageOpen: false });
    };
	
	public handleSearchText(event: any) {
		this.setState({
			searchText: (event.target.value)
		});
	};
	
	public handleAppend() {
		this.pullData(true);
	}
	
	public handleSearch() {
		this.pullData(false);
	}
	
	public pullData(append: boolean) {
		if(this.state.searchText == null || this.state.searchText == "")
			return;
		
		this.setState({
			isLoading: true
		});
		
		let newPage = this.state.page + 1;
		
        let url = "articles?" +
				  "page=" + encodeURIComponent(newPage.toString()) +
				  "&intitle=" + encodeURIComponent(this.state.searchText);

        fetch(url).then(response => response.json())
            .then(data => {
				if(data.StatusCode != 1) {
					this.setState({ errorMessageOpen: true });
					return;
				}
				
				let records = data.Content.items.map((article: any) => {
					return {
						QuestionDate: new Date(article.creation_date),
						Title: article.title,
						Author: article.owner.display_name,
						Link: article.link
					};
				});
				
				if (append == true) {
					this.setState({
						page: newPage,
						records: this.state.records.concat(records),
						isLoading: false,
						hasMore: data.has_more
					});
				} else {
					this.setState({
						page: newPage,
						records: records,
						isLoading: false,
						hasMore: data.has_more
					});
				}
            });
	}
	
	public componentDidMount() {
	}
}