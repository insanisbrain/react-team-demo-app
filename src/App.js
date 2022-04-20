import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Employee from './components/Employee';
import Products from './components/Products';
import { FormValidation } from './components/FormValidation';
import { NewComp } from './components/NewComp';

function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Employee /> */}
      {/* <Products /> */}
      <FormValidation />
      <NewComp/>
    </div>
  );
}

export default App;
