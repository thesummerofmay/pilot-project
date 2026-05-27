import styles from './page.module.css';

const capabilities = [
  { title: 'Web Apps',            desc: 'Full-stack with auth, DB & deploy' },
  { title: 'REST & GraphQL APIs', desc: 'Scalable backends, built fast'      },
  { title: 'AI Features',         desc: 'LLM integrations & pipelines'       },
  { title: 'CLI Tools',           desc: 'Scripts, automation & devtools'     },
  { title: 'Dashboards',          desc: 'Real-time data & analytics'         },
  { title: 'Mobile Apps',         desc: 'React Native & cross-platform'      },
  { title: 'Browser Extensions',  desc: 'Chrome, Firefox & beyond'           },
  { title: 'Data Pipelines',      desc: 'ETL, transforms & processing'       },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.label}>Hey, May — welcome to</p>
        <h1 className={styles.title}>Claude Code</h1>
        <p className={styles.subtitle}>Here&apos;s a taste of what we can build together.</p>
      </div>

      <div className={styles.grid}>
        {capabilities.map(({ title, desc }) => (
          <div key={title} className={styles.card}>
            <p className={styles.cardTitle}>{title}</p>
            <p className={styles.cardDesc}>{desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
