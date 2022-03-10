import react from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'
import { Link } from 'react-router-dom'

const Homepage = (props) => {
  console.log(props)
  return (
    <div className="homepage">
      <Directory />
    </div>
  )
}

export default Homepage
