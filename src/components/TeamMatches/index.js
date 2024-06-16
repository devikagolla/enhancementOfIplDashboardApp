// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

const teamMatchUrl = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  state = {isLoading: true, matchData: {}, teamBanner: {}, latestMatchData: {}}

  componentDidMount() {
    this.getMatchesData()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${teamMatchUrl}${id}`)
    const data = await response.json()
    console.log(data)

    const teamBannerUrl = data.team_banner_url
    const formattedMatchData = data.recent_matches.map(each =>
      this.getFormattedData(each),
    )
    const formattedLatestData = this.getFormattedData(data.latest_match_details)
    this.setState({
      teamBanner: teamBannerUrl,
      matchData: formattedMatchData,
      latestMatchData: formattedLatestData,
      isLoading: false,
    })
  }

  render() {
    const {teamBanner, matchData, latestMatchData, isLoading} = this.state
    console.log(isLoading)

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img src={teamBanner} alt="team banner" />
            <LatestMatch
              latestMatchData={latestMatchData}
              key={latestMatchData.id}
            />
            <ul>
              {matchData.map(each => (
                <MatchCard matchDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
