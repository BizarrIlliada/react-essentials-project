import Header from '/src/components/Header/Header.jsx';
import CoreConcept from '/src/components/CoreConcept/CoreConcept.jsx';
import TabButton from '/src/components/TabButton/TabButton';

import { CORE_CONCEPTS, EXAMPLES } from '/src/data';

import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic, selectedButton);
  }

  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {
              // CORE_CONCEPTS.map(conceptItem => <CoreConcept { ...conceptItem } />)
              CORE_CONCEPTS.map(conceptItem =>
                <CoreConcept
                  key={conceptItem.title}
                  title={conceptItem.title}
                  description={conceptItem.description}
                  image={conceptItem.image}
                />)
            }
          </ul>
        </section>

        <section id="examples">
          <h2>
            Examples
          </h2>
          <menu>
            { Object.values(EXAMPLES).map(exampleItem =>
                <TabButton
                  key={exampleItem.title}
                  isSelected={selectedTopic === exampleItem.title.toLowerCase()}
                  onSelect={() => handleSelect(exampleItem.title.toLowerCase())}
                >
                  { exampleItem.title }
                </TabButton>
            ) }
            {/* <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>
              State
            </TabButton> */}
          </menu>
          { selectedTopic ? (
            <div id="tab-content">
              <h3>{ EXAMPLES[selectedTopic].title }</h3>
              <p>{ EXAMPLES[selectedTopic].description }</p>
              <pre>
                <code>
                  { EXAMPLES[selectedTopic].code }
                </code>
              </pre>
            </div>
          ) : <p>Please, select a topic.</p> }
        </section>
      </main>
    </div>
  );
}

export default App;
