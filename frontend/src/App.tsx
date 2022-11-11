import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import LogIn from './pages/LogIn';

function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<LogIn/>}/>
			</Routes>
		</Router>
	);
}

export default AppRouter;
