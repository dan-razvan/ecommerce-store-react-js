import react from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'
import { Link } from 'react-router-dom'

const Homepage = (props) => {
  console.log(props)
  return (
    <div className="homepage">
      {/* <Link to="/hats">Hats</Link> */}
      <button onClick={() => props.history.push('/hats')}>Hats</button>
      <Directory />
    </div>
  )
}

export default Homepage
