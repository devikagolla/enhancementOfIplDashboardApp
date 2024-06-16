// Write your code here
// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, result, competingTeamLogo, matchStatus, id} =
    matchDetails

  return (
    <li key={id}>
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
