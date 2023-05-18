import logo from './logo.svg';
import './App.css';

//import Address from './components/Address';//
import Greet from './components/greet';
import Message from './components/message';
import ConditionalRendering from './components/ConditionalRendering'
import PersonsList from './components/PersonsList'
import Stylesheet from './components/Stylesheet'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import RefDemo from './components/RefDemo'
import FocusInput from './components/FocusInput'
import Hero from './components/Hero'
import Errorboundary from './components/Errorboundary'
import Counter from './components/Counter'
import {CounterRedux} from './components/CounterRedux'
import { Context } from './components/Context/Context';
import {ClassComponentTutorial} from './components/ClassComponentTutorial/ClassComponentTutorial';
import { CssStyleSheet, InlineStyleComponent } from './components/StyleTutorial/Inline';
import { PortalDemo } from './components/Portals/Portals';
import { HOC } from './components/HOC/HOC';
import { UseCallbackDemo } from './components/hooks/UseCallbackDemo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<Errorboundary> 
        < Hero heroname= 'Batman'/>
        < Hero heroname= 'Superman'/>
        < Hero heroname= 'Joker'/>
        </Errorboundary> 
        < Counter /> */}
       {/* <CounterRedux /> */}
       {/* <Context /> */}
       {/* <ClassComponentTutorial /> */}
       {/* <CssStyleSheet /> */}
       {/* <InlineStyleComponent /> */}
       {/* <PortalDemo /> */}
       {/* <HOC /> */}
       <UseCallbackDemo />
      </header>
    </div>
  );
}

export default App;
