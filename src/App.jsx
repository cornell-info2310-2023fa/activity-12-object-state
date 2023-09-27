import './App.css';

import { useState } from 'react';

import AccordionPanel from './components/AccordionPanel';
import DarkModeSwitcher from './components/DarkModeSwitcher';

export default function App() {
  const reactDocs = [
    {
      id: 1,
      title: "Props",
      body: "React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions."
    },
    {
      id: 2,
      title: "State",
      body: "Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state."
    },
    {
      id: 3,
      title: "Events",
      body: "React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on."
    },
    {
      id: 4,
      title: "Lifting State Up",
      body: "Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up, and it’s one of the most common things you will do writing React code."
    }
  ];

  const [panelActiveIndex, setPanelActiveIndex] = useState(1);
  const [appearance, setAppearance] = useState({
    isDarkMode: false,
    fontSize: '120%'
  });

  const accordionPanels = reactDocs.map(doc => (
    <AccordionPanel
      title={doc.title}
      isExpanded={panelActiveIndex === doc.id}
      onActivate={() => setPanelActiveIndex(doc.id)}
      darkMode={appearance.isDarkMode}
    >
      {doc.body}
    </AccordionPanel>
  ));

  return (
    <div
      className="App"
      style={{
        backgroundColor: (appearance.isDarkMode ? 'black' : 'white'),
        fontSize: appearance.fontSize
      }}>

      <DarkModeSwitcher onSwitchDarkMode={() => console.log("TODO")} />

      {accordionPanels}
    </div>
  );
}
