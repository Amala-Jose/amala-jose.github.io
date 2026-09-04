import { stats } from "../data/content";

export default function Stats() {
  return (
    <section className="stats" aria-label="Career highlights">
      <div className="container stats-inner">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
