export default function Section({ sectionTitle, children, ...proxyProps }) {
  console.log(children);

  return (
    <section {...proxyProps}>
      <h2>
        { sectionTitle }
      </h2>
      { children }
    </section>
  )
}