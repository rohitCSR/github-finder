import React, {useContext} from 'react'
import GithubContext from '../../context/github/githubContext'
import ReposItem from './ReposItem'

const Repos = () => {

  const githubContext = useContext(GithubContext)
  return( githubContext.repos.map(repo => 
    { return(<ReposItem repo={repo} key ={repo.id} />)
    
})) 
}

export default Repos