export function Diamond({ src, name, pos }) {
  return (
    <div className="diamond">
      <span className="dshape" aria-hidden="true" />
      {src
        ? <img src={src} alt={name} loading="lazy" style={pos ? { objectPosition: pos } : undefined} />
        : <div className="dph" aria-hidden="true">{name.trim().charAt(0).toUpperCase()}</div>}
    </div>
  );
}

export function PageHero({ title, sub }) {
  return (
    <section className="phero">
      <div className="phero-red" aria-hidden="true" />
      <div className="wrap"><h1>{title}</h1>{sub && <p>{sub}</p>}</div>
    </section>
  );
}

export function PhotoGallery({ items, className }) {
  return (
    <div className={className}>
      {items.map((item) => (
        <figure className="gallery-card" key={item.name}>
          <img src={item.photo} alt={`${item.name}, ${item.role}`} loading="lazy" />
          <figcaption><strong>{item.name}</strong><span>{item.role}</span></figcaption>
        </figure>
      ))}
    </div>
  );
}

export function PartnerLogos({ items }) {
  return (
    <div className="logos">
      {items.map((p) => <div className="tile" key={p.name} style={{ background: p.bg }}><img src={p.logo} alt={p.name} loading="lazy" /></div>)}
    </div>
  );
}
