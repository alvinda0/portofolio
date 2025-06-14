'use client';
import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Globe } from 'lucide-react';
import Footer from '@/component/footer';
import ContactSection from '@/component/contact-section';
import SkillsSection from '@/component/skills-section';
import ExperienceSection from '@/component/experience-section';
import AboutSection from '@/component/about-section';
import HeroSection from '@/component/hero-section';
import Navbar from '@/component/navbar';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState('id');
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

  // Language translations
  const translations = {
    id: {
      nav: {
        home: 'Beranda',
        about: 'Tentang',
        experience: 'Pengalaman',
        skills: 'Keahlian',
        contact: 'Kontak',
      },
      hero: {
        title: 'ALVINDA SHAHRUL',
        subtitle: 'Frontend & Mobile Developer',
        description:
          'Spesialisasi React.js dan Flutter dengan pengalaman dalam payment gateway dan sistem QRIS',
        location: 'Kebumen, Jawa Tengah',
        contactBtn: 'Hubungi Saya',
        downloadBtn: 'Download CV',
      },
      about: {
        title: 'Tentang Saya',
        description:
          'Mahasiswa S1 Teknik Informatika semester akhir dengan pengalaman 1-2 tahun di bidang frontend dan mobile development. Terbiasa menggunakan React.js untuk pengembangan web dan Flutter untuk aplikasi mobile dengan spesialisasi dalam integrasi payment gateway dan pengembangan sistem QRIS.',
        stats: {
          experience: 'Tahun Pengalaman',
          projects: 'Proyek Selesai',
          technologies: 'Teknologi',
          satisfaction: 'Kepuasan Klien',
        },
      },
      experience: {
        title: 'Pengalaman Kerja',
        jobs: [
          {
            title: 'Frontend Developer',
            company: 'PT Digitar Vocer Market Bersama',
            location: 'Yogyakarta',
            period: '2024',
            description:
              'Membangun aplikasi Sibayar dan Sikasir dengan Flutter + QRIS + payment gateway. Mengembangkan platform web menggunakan React.js dengan fokus pada state management dan integrasi API.',
            tech: ['React.js', 'Flutter', 'QRIS', 'Payment Gateway'],
          },
          {
            title: 'IT Developer (Freelance)',
            company: 'Komisi Pemberantasan Korupsi (KPK)',
            location: 'Remote',
            period: '2023',
            description:
              'Membangun sistem login aman dan dashboard interaktif dengan fokus pada efisiensi workflow dan reliabilitas sistem.',
            tech: ['Web Development', 'Security', 'Dashboard'],
          },
          {
            title: 'Mobile Developer Intern',
            company: 'PT Media Kreasi Abadi',
            location: 'Remote (Kampus Merdeka)',
            period: '2023',
            description:
              'Mengembangkan aplikasi Android native menggunakan Kotlin dan melakukan deployment ke Google Play Store.',
            tech: ['Kotlin', 'Android', 'Google Play', 'REST API'],
          },
        ],
      },
      skills: {
        title: 'Keahlian',
        education: {
          title: 'Pendidikan',
          degree: 'S1 Teknik Informatika',
          university: 'Universitas Pamulang',
          period: '2019 - Sekarang (Semester Akhir)',
        },
      },
      contact: {
        title: 'Hubungi Saya',
        subtitle:
          'Mari berkolaborasi untuk menciptakan sesuatu yang luar biasa!',
        form: {
          name: 'Nama',
          email: 'Email',
          message: 'Pesan',
          namePlaceholder: 'Nama Anda',
          emailPlaceholder: 'email@example.com',
          messagePlaceholder: 'Pesan Anda...',
          send: 'Kirim Pesan',
          successMsg: 'Terima kasih! Pesan Anda telah dikirim.',
        },
        info: {
          email: 'Email',
          phone: 'Telepon',
          linkedin: 'LinkedIn',
        },
      },
      footer: {
        text: '© 2024 Alvinda Shahrul. Made with ❤️ using React.js',
      },
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        contact: 'Contact',
      },
      hero: {
        title: 'ALVINDA SHAHRUL',
        subtitle: 'Frontend & Mobile Developer',
        description:
          'Specialized in React.js and Flutter with experience in payment gateway and QRIS system',
        location: 'Kebumen, Central Java',
        contactBtn: 'Contact Me',
        downloadBtn: 'Download CV',
      },
      about: {
        title: 'About Me',
        description:
          'Final year Computer Science student with 1-2 years of experience in frontend and mobile development. Experienced in using React.js for web development and Flutter for mobile applications with specialization in payment gateway integration and QRIS system development.',
        stats: {
          experience: 'Years Experience',
          projects: 'Projects Completed',
          technologies: 'Technologies',
          satisfaction: 'Client Satisfaction',
        },
      },
      experience: {
        title: 'Work Experience',
        jobs: [
          {
            title: 'Frontend Developer',
            company: 'PT Digitar Vocer Market Bersama',
            location: 'Yogyakarta',
            period: '2024',
            description:
              'Built Sibayar and Sikasir applications using Flutter + QRIS + payment gateway. Developed web platforms using React.js with focus on state management and API integration.',
            tech: ['React.js', 'Flutter', 'QRIS', 'Payment Gateway'],
          },
          {
            title: 'IT Developer (Freelance)',
            company: 'Corruption Eradication Commission (KPK)',
            location: 'Remote',
            period: '2023',
            description:
              'Built secure login system and interactive dashboard with focus on workflow efficiency and system reliability.',
            tech: ['Web Development', 'Security', 'Dashboard'],
          },
          {
            title: 'Mobile Developer Intern',
            company: 'PT Media Kreasi Abadi',
            location: 'Remote (Kampus Merdeka)',
            period: '2023',
            description:
              'Developed native Android applications using Kotlin and deployed to Google Play Store.',
            tech: ['Kotlin', 'Android', 'Google Play', 'REST API'],
          },
        ],
      },
      skills: {
        title: 'Skills',
        education: {
          title: 'Education',
          degree: 'Bachelor of Computer Science',
          university: 'Universitas Pamulang',
          period: '2019 - Present (Final Semester)',
        },
      },
      contact: {
        title: 'Contact Me',
        subtitle: "Let's collaborate to create something amazing!",
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          namePlaceholder: 'Your Name',
          emailPlaceholder: 'email@example.com',
          messagePlaceholder: 'Your Message...',
          send: 'Send Message',
          successMsg: 'Thank you! Your message has been sent.',
        },
        info: {
          email: 'Email',
          phone: 'Phone',
          linkedin: 'LinkedIn',
        },
      },
      footer: {
        text: '© 2024 Alvinda Shahrul. Made with ❤️ using React.js',
      },
    },
  };

  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />
      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
