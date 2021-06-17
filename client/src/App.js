import logo from './assets/spacex.png';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import Launches from './components/Launches';
import Launch from './components/Launch';
import Navbar from './components/Navbar';
import History from './components/History';
import Rockets from './components/Rockets';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const client = new ApolloClient({
  uri:'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

  function App() {
    return (
    <ApolloProvider client={client}>
      <Router>
      <div className="App container">
        <Navbar />
        <Route exact path='/' component={Launches} />
        <Route exact path='/histories' component={History} />
        <Route exact path='/rockets' component={Rockets} />
        <Route exact path='/launch/:flight_number' component={Launch} />
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
