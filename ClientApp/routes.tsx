import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PlanetsView } from './components/planets/PlanetsView';

export const routes = <Layout>
	<Route path='/' component={ PlanetsView } />
</Layout>;
