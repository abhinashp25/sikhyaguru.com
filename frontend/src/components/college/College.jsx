import React from 'react'
import { useParams } from 'react-router-dom'

const College = () => {
  const { collegeId} = useParams();

  return (
    <div>
      {collegeId}
    </div>
  )
}

export default College
