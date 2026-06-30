import Seccion1 from './components/general/seccion1.jsx';
import Experience from './components/experience/experience.jsx';
import Practice from './components/practice/practice.jsx';
import './App.css';

function App() {
    return (
        <div className="principal">
            <Seccion1 />
            <Experience />
            <Practice />
        </div>
    );
}

export default App;
