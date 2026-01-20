const skills = [
  { name: 'SQL', level: 50 },
  { name: 'Python', level: 30 },
  { name: 'Power BI', level: 70 },
  { name: 'Excel', level: 40 },
  { name: 'Adobe Package', level: 60 },
  // { name: 'Qlick', level: 30 },
  // { name: 'DBT Core', level: 30 },
  // { name: 'Apache Airflow', level: 30 },
];

const tools = ['SQL', 'Python', 'Power BI', 'Excel', 'Adobe Package' ];//, 'Click', 'DBT Core', 'Airflow'];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background-light/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Skills & Expertise</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies and tools I work with to extract value from data
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Core Competencies */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Core Competencies</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full progress-bar rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-background rounded-lg border border-white/10 text-gray-300 hover:border-primary/50 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-background border border-white/5">
              <h4 className="text-lg font-semibold mb-3 text-primary">Currently Learning</h4>
              <p className="text-gray-400">
                Machine Learning fundamentals, advanced statistical modeling, and cloud-based data warehousing solutions to expand my analytical capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
