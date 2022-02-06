import { useState, useEffect } from 'react';
import { Navigate, useParams, useNavigate, useLocation } from 'react-router-dom';
import Button from '../Button';



const TaskDetails = () => {
  const [ loading, setLoading ] = useState( true )
  const [ task, setTask ] = useState( {} )
  const [ error, setError ] = useState( null )

  const params = useParams()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect( () => {
    const fetchTask = async () => {
      const res = await fetch( `http://localhost:5000/tasks/${ params.id }` )
      const data = await res.json()

      if ( res.status === 404 ) {
        // setError('Task not found')
        navigate( '/' )  // If error: redirect user home
      }

      setTask( data )
      setLoading( false )
    }
    fetchTask()
  } );


  if ( error ) {
    // * use <Navigate /> instaed of <Redirect /> in Router v6
    <Navigate to='/' />
  }

  //-----------------------------------------------------
  return loading ? <h3>Loading...</h3> : <div>
    <h3>{ task.text }</h3>
    <p>{ task.day }</p>
    <Button text='Go back' onClick={ () => navigate( -1 ) } />
    <p>Path : { pathname }</p>
  </div>
};

export default TaskDetails;

// User navigate(-1) for go back in router v6