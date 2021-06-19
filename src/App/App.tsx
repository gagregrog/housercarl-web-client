import './App.css';
import Router from '../Router/Router';
import QueryProvider from '../context/QueryProvider';

function App() {
  return (
    <QueryProvider>
      <Router />
    </QueryProvider>
  );
}

export default App;
