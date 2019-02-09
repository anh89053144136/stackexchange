import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ArticlesView } from './components/ArticlesView';

export const routes = <Layout>
	<Route path='/' component={ ArticlesView } />
</Layout>;
