import './App.css'
import "react-mosaic-component/react-mosaic-component.css";
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import CompanyWidgets from "./components/CompanyWidgets.tsx";

function App() {
  return (
          <div className={"flex flex-col h-[100vh]"}>
              <CompanyWidgets/>
          </div>
  )
}

export default App
