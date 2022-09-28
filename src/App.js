import Routes from "./routes/routes";
import './App.css';
// import ErrorBoundry from "./error/ErrorBoundry";
import { ToastProvider } from 'react-toast-notifications';


function App() {
  return (
    <ToastProvider>
    {/* <ErrorBoundry> */}
      <div className="App">
        <Routes />
      </div>
    {/* </ErrorBoundry> */}
    </ToastProvider>
  );
}

export default App;












// function App() {
//   return (
//   <Router>
//     <Routes>
//         <div className="container">

//             {/* <MoviesPages /> */}

//             <Route path="/home" components = { <MoviesPage/> }/>

//         </div>

//     </Routes>

//   </Router>

//   )
// }

// export default App;


