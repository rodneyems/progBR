import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import PageProject from './components/PageProject';
import Projects from './components/Projects';
import ProjectReview from './components/ProjectReview';
import Negado from './components/Negado'
import PrivateRoute from './components/PrivateRoute'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Watch from './components/Watch';

import loginReducer from "./reducer/loginReducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(loginReducer)

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<Nav></Nav>
					<Switch>
						<Route exact path="/">
							<Header></Header>
						</Route>

						{/* Outra maneira */}
						{/* <Route path="/" component={Header} /> */}
						<Route path="/projects/:id">
							<ProjectReview></ProjectReview>
						</Route>
						<PrivateRoute path="/projects">
							<Projects></Projects>
						</PrivateRoute>
						<Route  path="/description">
							<PageProject></PageProject>
						</Route>
						<Route path="/watch">
							<Watch></Watch>
						</Route>
						<Route path="/denied">
							<Negado></Negado>
						</Route>
						<Route path="*">
							<h3>Desculpe o caminho não foi encontrado</h3>
						</Route>
						
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
	)
}

export default App;
