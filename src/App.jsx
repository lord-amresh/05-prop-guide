import './App.css'

import BasicProps from './components/BasicProps.jsx'
import Refprops from './components/Refprops.jsx'
import ChildrenProps from './components/ChildrenProps.jsx'
import Complexprops from './components/Complexprops.jsx'
import ThemeToggler from './components/ThemeToggler.jsx'

function navigation () {
  const isdark = true

  const sections = [
    {id: 'basic', label: 'Basic Props', icon: '📦'},
    {id: 'ref', label: 'Ref Props', icon: '🔗'},
    {id: 'children', label: 'Children Props', icon: '👶'},
    {id: 'complex', label: 'Complex Props', icon: '🧩'},
    {id: 'theme', label: 'Theme Toggler', icon: '🎨'}
  ]

  return (
    <nav className='{`sticky top-0 z-50 shadow-md`}'></nav>
  )
}

function AppContent () {
  return <div className={`min-h-screen bg-gray-800`}><h1 class="text-3xl text-white font-bold underline">
    Hello world!
  </h1></div>;
}

function App() {
  return (
    <AppContent />
   );
}

export default App
