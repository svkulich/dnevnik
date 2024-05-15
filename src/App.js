import React from 'react'

import './App.css'
import GroupBlock from './components/GroupBlock'
import StudentBlock from './components/StudentBlock'
import galochki from './components/galochki'

const App = ({ studentsArray, groupArray, statArray }) => {
	return (
		<div className='MainContainer'>
			<GroupBlock groupArray={groupArray} studentsArray={studentsArray} />
			<galochki statArray={statArray} />
		</div>
	)
}

export default App
