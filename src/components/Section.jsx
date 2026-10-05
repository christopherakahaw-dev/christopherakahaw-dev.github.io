export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section reveal" aria-labelledby={`${id}-title`}>
      <div className="container">
        <p className="eyebrow mono">{eyebrow}</p>
        <h2 id={`${id}-title`} className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
