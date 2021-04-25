import React , {useReducer} from 'react'
import AlertReducer from './alertReducer'
import AlertContext from './alertContext'
import { SET_ALERT, REMOVE_ALERT} from '../type' 


const AlertState = (props) => {

    const intitialState = null

    const [state, dispatch] = useReducer(AlertReducer, intitialState)

    const setAlert = (msg,type) =>{
      
        dispatch({
            type:SET_ALERT,
            payload:{msg,type}
        })
        setTimeout(() => {
          dispatch({type:REMOVE_ALERT})
        },900);
      }

      return (
          
               <AlertContext.Provider
                
               value = {{
                alert:state,
                setAlert}
                   
               } 
               > 

               {props.children}
               
               </AlertContext.Provider>
      )
}

export default AlertState