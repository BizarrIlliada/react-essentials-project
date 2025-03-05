import { useState } from 'react';
import Section from '/src/components/Section/Section';
import TabButton from '/src/components/TabButton/TabButton';
import Tabs from '/src/components/Tabs/Tabs';
import { EXAMPLES } from '/src/data';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic, selectedButton);
  }

  const tabButtons = Object.values(EXAMPLES).map(exampleItem =>
    <TabButton
      key={exampleItem.title}
      isSelected={selectedTopic === exampleItem.title.toLowerCase()}
      onClick={() => handleSelect(exampleItem.title.toLowerCase())}
    >
      { exampleItem.title }
    </TabButton>
)

  return (
    <Section id="examples" sectionTitle="Examples">
      <Tabs
        buttons={tabButtons}
        // ButtonsContainer="menu"
        // ButtonsContainer={Section}
      >
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
      </Tabs>
    </Section>
  )
}
