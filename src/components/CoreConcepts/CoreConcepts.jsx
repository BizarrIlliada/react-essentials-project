import Section from '/src/components/Section/Section';
import CoreConcept from './CoreConcept';

import { CORE_CONCEPTS } from '/src/data';

export default function CoreConcepts(props) {
  return (
    <Section id="core-concepts" sectionTitle="Core Concepts">
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
    </Section>
  )
}
