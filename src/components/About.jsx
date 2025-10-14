import { motion } from 'framer-motion';
import { Wheat, Coffee, Heart, Award } from 'lucide-react';
import breadImage from '../assets/bread2.jpg';

const About = () => {
  const features = [
    {
      icon: Wheat,
      title: 'Ingredientes Frescos',
      description: 'Selecionamos os melhores ingredientes para garantir qualidade',
    },
    {
      icon: Coffee,
      title: 'Café 100% Arábica',
      description: 'Grãos especiais torrados artesanalmente',
    },
    {
      icon: Heart,
      title: 'Feito com Carinho',
      description: 'Cada produto é preparado com dedicação e amor',
    },
    {
      icon: Award,
      title: 'Fermentação Natural',
      description: 'Pães com fermentação lenta para melhor sabor e digestão',
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={breadImage}
                alt="Pães artesanais"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-4xl font-bold">18+</div>
                <div className="text-sm font-semibold">Anos de Tradição</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Sobre Nossa <span className="text-primary">Padaria</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Desde 2005, nossa padaria artesanal combina receitas tradicionais
                com ingredientes selecionados, oferecendo pães e doces preparados
                com carinho e dedicação. Cada produto que sai do nosso forno carrega
                a paixão pela arte da panificação e o compromisso com a qualidade.
              </motion.p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="border-l-4 border-primary pl-6 py-4 italic text-muted-foreground"
            >
              "Venha sentir o aroma do pão quentinho saindo do forno e descubra o
              verdadeiro sabor da tradição artesanal."
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

