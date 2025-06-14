interface FooterProps {
  translations: {
    text: string;
  };
}

export default function Footer({ translations }: FooterProps) {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-400">{translations.text}</p>
      </div>
    </footer>
  );
}
