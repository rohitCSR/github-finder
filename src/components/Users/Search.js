import React, { useState, useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'
import GithubContext from '../../context/github/githubContext'

const Search =() =>  {
    const alertContext = useContext(AlertContext)
    const githubContext = useContext(GithubContext)
    const[text, setText] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(text === ''){
            alertContext.setAlert('please enter somethhing' , 'light')
        } else{
            githubContext.searchUser(text)
            setText('')
        }
    }
    
    const onChange = (e) => {
        setText( e.target.value)
    }

    
        return(
            <div>
                <form onSubmit={onSubmit} className='from'>
                    <input type='text' name='text' 
                    placeholder ='Search here' value={text}
                    onChange={onChange}
                    ></input>
                    <input
                    type='submit'
                    value='Search'
                    className='btn btn-dark btn-block' 
                    ></input>
                    {githubContext.users.length>0 && <button className='btn btn-light btn-block' 
                    onClick={githubContext.clearUser}>Clear</button>}
                    
                </form>
            </div>
        )
}

export default Search