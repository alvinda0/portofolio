// Import or define your translation object 't' here
// Example placeholder:
import { GraduationCap } from 'lucide-react';

const t = {
  skills: {
    title: 'Skills',
    education: {
      title: 'Education',
      degree: 'Bachelor of Science in Computer Science',
      university: 'Example University',
      period: '2018 - 2022',
    },
  },
};

// Example skills array
const skills = [
  { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
  { name: 'TypeScript', level: 85, color: 'from-blue-400 to-blue-600' },
  { name: 'React', level: 80, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Node.js', level: 75, color: 'from-green-400 to-green-600' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-semibold">{skill.name}</span>
                <span className="text-blue-400 text-sm font-bold">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-bold text-white">
                {t.skills.education.title}
              </h3>
            </div>
            <p className="text-blue-400 font-semibold mb-1">
              {t.skills.education.degree}
            </p>
            <p className="text-gray-300 mb-1">
              {t.skills.education.university}
            </p>
            <p className="text-gray-400 text-sm">{t.skills.education.period}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
