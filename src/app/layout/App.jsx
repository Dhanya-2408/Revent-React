import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import NavBar from '../../features/nav/NavBar';
import HomePage from '../../features/home/HomePage';
import EventForm from '../../features/events/eventForm/EventForm';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import { useLocation } from 'react-router-dom';

export default function App() {

  const {key} = useLocation();

  return (
    
    <>
        <Route exact path='/' component={HomePage} />
        <Route
          path={'/(.+)'}
          render={() => (
            <>
              <NavBar />
              <Container className='main'>
                <Route exact path='/events' component={EventDashboard} />
                <Route path='/events/:id' component={EventDetailedPage} />
                <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key} />
              </Container>
            </>
          )}
          />
       </>  
  );
}
