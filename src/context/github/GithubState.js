import React, {useReducer} from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_REPOS,
    GET_USER
} from '../type'


let githubCliendID 
let githubClientSecret 

if(process.env.NODE_ENV !== 'production ') 
{ 
    githubCliendID=process.env.REACT_APP_CLIENT_ID
    githubClientSecret=process.env.REACT_APP_CLIENT_SECRET
} else {
    githubCliendID=process.env.CLIENT_ID
    githubClientSecret=process.env.CLIENT_SECRET
}
//Initial state creation

const  GithubState = (props) => {
  const intialState = {
      users:[],
      user:{},
      repos:[],
      loading:false
  }  

   const [state, dispatch] = useReducer(GithubReducer, intialState)

   //search user
   const searchUser = async text => {
    setLoading()

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${
    githubCliendID}&client_secret=${githubClientSecret}`) 

   dispatch({
       type: SEARCH_USERS,
       payload:res.data.items
   })  
  
  } 






   //get user


   const getUser = async (username) => {
      
    setLoading()

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${
    githubCliendID}&client_secret=${githubClientSecret}`) 

   
    dispatch({
        type: GET_USER,
        payload:res.data
    })
  }


   //get repos

   const  getUserRepos = async (username) => {
     
    setLoading()

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubCliendID}&client_secret=${githubClientSecret}`) 

    dispatch({
        type: GET_REPOS,
        payload:res.data
    })
  }






   //set loading

   const setLoading = () => {
        return (
            dispatch({type: SET_LOADING})
        )
   }





   //clear users 
   const clearUser = () =>{
     return(
         dispatch({type: CLEAR_USERS})
     )  
    
  }


   return (
       <GithubContext.Provider
       value = {{
           users:state.users,
           user:state.user,
           repos: state.repos,
           loading: state.loading,
           searchUser,
           clearUser,
           getUser,
           getUserRepos
       }}
       
       > 

       {props.children}


       </GithubContext.Provider>
   )

}


export default GithubState