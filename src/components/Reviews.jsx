import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Maria Silva',
      rating: 5,
      comment:
        'Os melhores croissants da cidade! Crocantes por fora e macios por dentro. O café também é excepcional. Virei cliente fiel!',
      date: '15 de Setembro, 2024',
    },
    {
      id: 2,
      name: 'João Santos',
      rating: 5,
      comment:
        'Qualidade impecável! O pão de fermentação natural é simplesmente perfeito. Atendimento acolhedor e produtos sempre frescos.',
      date: '8 de Setembro, 2024',
    },
    {
      id: 3,
      name: 'Ana Costa',
      rating: 5,
      comment:
        'Adoro o bolo de chocolate! É úmido, saboroso e a cobertura é divina. Sempre compro para as festas da família.',
      date: '2 de Setembro, 2024',
    },
    {
      id: 4,
      name: 'Carlos Oliveira',
      rating: 5,
      comment:
        'Ambiente aconchegante e produtos artesanais de primeira qualidade. O café da manhã aqui é uma experiência única!',
      date: '25 de Agosto, 2024',
    },
    {
      id: 5,
      name: 'Beatriz Lima',
      rating: 5,
      comment:
        'Tudo fresquinho e delicioso! Os pães de queijo são os melhores que já provei. Recomendo demais!',
      date: '18 de Agosto, 2024',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'fill-primary text-primary'
            : 'fill-none text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quem prova, <span className="text-primary">volta</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos produtos
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px]">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100,
                  display: index === currentIndex ? 'block' : 'none',
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl">
                  <Quote className="w-12 h-12 text-primary/20 mb-6" />

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {renderStars(review.rating)}
                  </div>

                  {/* Comment */}
                  <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                    "{review.comment}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-lg">{review.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '5.0', label: 'Avaliação Média' },
            { value: '500+', label: 'Avaliações' },
            { value: '98%', label: 'Satisfação' },
            { value: '1000+', label: 'Clientes Felizes' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-card rounded-xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;

