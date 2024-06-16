// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamImageUrl, name} = teamDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li key={id}>
        <div className="item-container">
          <img src={teamImageUrl} alt={`${name}`} />
          <p>{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
