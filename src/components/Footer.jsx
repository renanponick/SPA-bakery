import { motion } from 'framer-motion';
import { Heart, MapPin, Clock, Phone } from 'lucide-react';
import { scrollToSection } from '../utils/helpers';

const Footer = () => {
  const quickLinks = [
    { label: 'Início', id: 'hero' },
    { label: 'Cardápio', id: 'menu' },
    { label: 'Sobre', id: 'about' },
    { label: 'Avaliações', id: 'reviews' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🥐</span>
              <h3 className="text-xl font-bold text-primary">
                Padaria Artesanal
              </h3>
            </div>
            <p className="text-muted-foreground">
              Pães artesanais, bolos caseiros e o café mais aromático da cidade
              desde 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Rua das Flores, 123 - Centro, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">(11) 99999-9999</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Horário de Funcionamento</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start space-x-2">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Segunda a Sábado</p>
                  <p className="font-semibold">6h às 20h</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Domingo</p>
                  <p className="font-semibold">7h às 14h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Padaria Artesanal. Todos os direitos reservados.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-muted-foreground flex items-center space-x-1"
            >
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>para você</span>
            </motion.p>
          </div>
        </div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-border"
        >
          <p className="text-lg font-semibold text-primary italic">
            "Pão quentinho, café forte e boas conversas — todos os dias."
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

