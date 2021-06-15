import logo from './assets/spacex.png';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Launches from './components/Launches';

const client = new ApolloClient({
  uri:'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

  function App() {
    return (
    <ApolloProvider client={client}>
      <div className="App">
        <img src={logo} alt='spaceX logo' style={{width: '40%', display: 'block', margin: 'auto'}} />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
