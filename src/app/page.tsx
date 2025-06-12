'use client';
import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Code,
  Database,
  Smartphone,
  Globe,
  ChevronRight,
  Calendar,
  Briefcase,
  GraduationCap,
  User,
  Award,
  Zap,
  ExternalLink,
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    tech: string[];
    icon: React.ReactNode;
  }

  interface Skill {
    name: string;
    level: number;
    color: string;
  }

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  interface InputChangeEvent
    extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

  const handleInputChange = (e: InputChangeEvent): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  interface HandleSubmitEvent
    extends React.MouseEvent<HTMLButtonElement, MouseEvent> {}

  const handleSubmit = (e: HandleSubmitEvent): void => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Terima kasih! Pesan Anda telah dikirim.');
    setFormData({ name: '', email: '', message: '' });
  };

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'PT Digitar Vocer Market Bersama',
      location: 'Yogyakarta',
      period: '2024',
      description:
        'Membangun aplikasi Sibayar dan Sikasir dengan Flutter + QRIS + payment gateway. Mengembangkan platform web menggunakan React.js dengan fokus pada state management dan integrasi API.',
      tech: ['React.js', 'Flutter', 'QRIS', 'Payment Gateway'],
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: 'IT Developer (Freelance)',
      company: 'Komisi Pemberantasan Korupsi (KPK)',
      location: 'Remote',
      period: '2023',
      description:
        'Membangun sistem login aman dan dashboard interaktif dengan fokus pada efisiensi workflow dan reliabilitas sistem.',
      tech: ['Web Development', 'Security', 'Dashboard'],
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: 'Mobile Developer Intern',
      company: 'PT Media Kreasi Abadi',
      location: 'Remote (Kampus Merdeka)',
      period: '2023',
      description:
        'Mengembangkan aplikasi Android native menggunakan Kotlin dan melakukan deployment ke Google Play Store.',
      tech: ['Kotlin', 'Android', 'Google Play', 'REST API'],
      icon: <Smartphone className="w-5 h-5" />,
    },
  ];

  const skills = [
    { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Flutter/Dart', level: 85, color: 'from-purple-500 to-pink-500' },
    { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'HTML/CSS', level: 90, color: 'from-green-500 to-teal-500' },
    {
      name: 'Payment Gateway',
      level: 85,
      color: 'from-indigo-500 to-purple-500',
    },
    { name: 'QRIS Integration', level: 90, color: 'from-red-500 to-pink-500' },
    { name: 'Git/GitHub', level: 85, color: 'from-gray-500 to-slate-500' },
    { name: 'REST API', level: 85, color: 'from-emerald-500 to-cyan-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alvinda
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'experience', 'skills', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors duration-300 hover:text-blue-400 ${
                      activeSection === section
                        ? 'text-blue-400'
                        : 'text-gray-300'
                    }`}
                  >
                    {section === 'hero' ? 'Home' : section}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <User className="w-16 h-16 text-blue-400" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            ALVINDA SHAHRUL
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Frontend & Mobile Developer
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Spesialisasi React.js dan Flutter dengan pengalaman dalam payment
            gateway dan sistem QRIS
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Kebumen, Jawa Tengah</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>0857-1438-4307</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:alvindashahrul0@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/alvinda-shahrul-79b53a231/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Hubungi Saya
            </button>
            <button className="px-8 py-3 border border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center">
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tentang Saya
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Mahasiswa S1 Teknik Informatika semester akhir dengan pengalaman 1-2
            tahun di bidang frontend dan mobile development. Terbiasa
            menggunakan React.js untuk pengembangan web dan Flutter untuk
            aplikasi mobile dengan spesialisasi dalam integrasi payment gateway
            dan pengembangan sistem QRIS.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-gray-300 text-sm">Tahun Pengalaman</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-gray-300 text-sm">Proyek Selesai</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-pink-400 mb-2">5+</div>
              <div className="text-gray-300 text-sm">Teknologi</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300 text-sm">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pengalaman Kerja
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      {exp.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                        <p className="text-gray-400 text-sm">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-2 text-purple-400 font-semibold mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Keahlian
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
                <h3 className="text-xl font-bold text-white">Pendidikan</h3>
              </div>
              <p className="text-blue-400 font-semibold mb-1">
                S1 Teknik Informatika
              </p>
              <p className="text-gray-300 mb-1">Universitas Pamulang</p>
              <p className="text-gray-400 text-sm">
                2019 - Sekarang (Semester Akhir)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hubungi Saya
            </h2>
            <p className="text-lg text-gray-300">
              Mari berkolaborasi untuk menciptakan sesuatu yang luar biasa!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-300">alvindashahrul0@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Telepon
                    </h3>
                    <p className="text-gray-300">0857-1438-4307</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      LinkedIn
                    </h3>
                    <p className="text-gray-300">alvinda-shahrul</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Pesan Anda..."
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Kirim Pesan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Alvinda Shahrul. Made with ❤️ using React.js
          </p>
        </div>
      </footer>
    </div>
  );
}
