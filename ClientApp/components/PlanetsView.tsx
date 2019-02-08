import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { MainModel } from './MainModel';

const loading_container = {
	textAlign: "center"
} as React.CSSProperties;

export class PlanetsView extends React.Component<RouteComponentProps<{}>, MainModel> {

	constructor(props: any) {
        super(props);
        this.state = { 
			searchText: '', 
			isLoading: false, 
			records: []
		};

		/*
        fetch('api/SampleData/Weatherrecords')
            .then(response => response.json() as Promise<PlanetRow[]>)
            .then(data => {
                this.setState({ records: data, loading: false });
            });
		*/
    }

    public render() {
		let tableBody = (this.state == null || this.state.records.length ==0 || this.state.isLoading == true) ? 
			<TableBody>
				<TableRow>
					<TableCell colSpan={4}>
						<div style={loading_container}>
							<CircularProgress />
						</div>
					</TableCell>
				</TableRow>
			</TableBody>:
			<TableBody>
				  {this.state.records.map(row => {
					//var lastVisitDate = row.lastVisitDate?row.lastVisitDate.toISOString().slice(0,10):"";
					var lastVisitDate = "";
					
					return (
					  <TableRow key={row.Title}>
						<TableCell component="th" scope="row">
						  {row.QuestionDate}
						</TableCell>
						<TableCell>{row.Title}</TableCell>
						<TableCell>{row.Author}</TableCell>
						<TableCell>
							<a href="#">Go to</a>
						</TableCell>
					  </TableRow>
					);
				  })}
				</TableBody>;

        return <div style={{ textAlign: 'center' }}>
					<TextField
					  id="fd-SearchText"
					  label="Search text"
					  value={this.state.searchText}
					  margin="normal"
					/>
					<Button variant="fab">
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
					</Table>
				</div>;
    }
	
	public componentDidMount() {
	}
}