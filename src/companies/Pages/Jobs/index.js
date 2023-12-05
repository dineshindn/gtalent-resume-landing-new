import React, { Fragment } from 'react'
import Navbar from '../../../reusableComponents/views/Navbar'
import JobsList from '../../Component/Jobs'
function JobsMain() {
  return (
    <Fragment>
        <Navbar />
        <JobsList />
    </Fragment>
  )
}

export default JobsMain