import './App.css'

import BasicProps from './components/BasicProps.jsx'
import Refprops from './components/Refprops.jsx'
import ChildrenProps from './components/ChildrenProps.jsx'
import Complexprops from './components/Complexprops.jsx'
import ThemeToggler from './components/ThemeToggler.jsx'

function Navigation () {
  const isdark = true

  const sections = [
    {id: 'basic', label: 'Basic Props', icon: '📦'},
    {id: 'ref', label: 'Ref Props', icon: '🔗'},
    {id: 'children', label: 'Children Props', icon: '👶'},
    {id: 'complex', label: 'Complex Props', icon: '🧩'},
    {id: 'theme', label: 'Theme Toggler', icon: '🎨'}
  ]

  return (
    <nav className={`sticky top-0 z-50 shadow-md
    transition-colors ${
      isdark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex flex-wrap gap-2 justify-center'>
          {sections.map((section) => (
            <button
            className={`px-4 py-2 rounded-lg font-medium bg-blue-600 text-white mr-2 mt-2`}
              key={section.id}
              >
                <span>{section.icon}</span>
                {section.label}
              </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

function AppContent () {
  return <div className={`min-h-screen bg-gray-800`}>
    <Navigation/>
    <h1 className="text-3xl text-white font-bold underline">
    Hello world!
  </h1></div>;
}

function App() {
  return (
    <AppContent />
   );
}

export default App
