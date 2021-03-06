import React, {useEffect, Fragment, useContext} from 'react'
import Spinner from '../layouts/Spinner'

import {Link} from 'react-router-dom'
import Repos from '../Repos/Repos'
import GithubContext from '../../context/github/githubContext'


const Userdata = ({ match}) => {
    
    const githubContext = useContext(GithubContext)
    const {repos, loading, user} = githubContext

    
 
    useEffect(() => {
        githubContext.getUser(match.params.login)
        githubContext.getUserRepos(match.params.login)
       
       // eslint-disable-next-line
   },[])
    
     
    
        const {
            name,
            avatar_url,
            location,
            bio,
            hireable,
            html_url,
            followers,
            following,
            public_repos,
            public_gists

    
        } = user 
        

        if(loading) {
            return<Spinner />
        }
          else{
            return(
                <Fragment>

                    <Link to='/' className='btn btn-light'>
                        Back to search</Link>
                        Hireable:{''}
                        {hireable ? <i className='fas fa-check text-success'/> 
                        : <i className='fas fa-times-circle text-danger'/>}

                        <div className='card grid-2'>
                            <div className='all-center'>
                               <img src={avatar_url} className='round-img' alt='profile' style={{ width:'150px'}}>
                               </img> 
                               <h1>{name}</h1>
                               <p>Location:{location}</p>
                            </div>
                            <div>
                                {bio &&( <Fragment>
                                
                                    <h3>Bio</h3>
                                    <p>{bio}</p>
                                    </Fragment>)}

                                <a href={html_url} className='btn btn-dark my-1'>Github profile</a>
                                </div>
                        </div>
                        <div className='card text-center'>
                            <div className='badge badge-primary'>Followers:{followers}</div>
                            <div className='badge badge-success'>Following:{following}</div>
                            <div className='badge badge-dark'>Public repositories:{public_repos}</div>
                            <div className='badge badge-light'>Public Gists:{public_gists}</div>
                        </div>
                        <Repos repos={repos}/>
                </Fragment>
            )
          }
            
}

export default Userdata