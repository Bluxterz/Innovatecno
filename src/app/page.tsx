import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import { Phone, Mail, Clock, MapPin, Shield, Laptop, Camera, Monitor, Users, BookOpen, Menu } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: "Soporte Técnico",
      description: "Asistencia remota 24/7 para resolver cualquier problema tecnológico"
    },
    {
      icon: Laptop,
      title: "Venta de Software",
      description: "Soluciones de software empresarial adaptadas a sus necesidades"
    },
    {
      icon: Monitor,
      title: "Infraestructura TI",
      description: "Diseño e implementación de infraestructura tecnológica robusta"
    },
    {
      icon: Camera,
      title: "Cámaras de Seguridad (CCTV)",
      description: "Sistemas de vigilancia avanzados para proteger su empresa"
    },
    {
      icon: Users,
      title: "Venta de Equipos",
      description: "Hardware y equipamiento tecnológico de última generación"
    },
    {
      icon: BookOpen,
      title: "Salas de Clase Virtual",
      description: "Soluciones de educación virtual para instituciones educativas"
    }
  ];

  const stats = [
    { number: "5+", label: "Años de Experiencia" },
    { number: "100+", label: "Proyectos Completados" },
    { number: "14", label: "Profesionales" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
     

      {/* Hero Section */}
      <Header />

      <Hero />
      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h3>
            <p className="text-xl text-muted-foreground">Soluciones tecnológicas completas para todas sus necesidades</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all hover:border-secondary/50">
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-8 w-8 text-secondary mr-3" />
                    <h4 className="text-xl font-semibold text-card-foreground">{service.title}</h4>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">Nuestra Experiencia</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-xl text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">Contáctanos</h3>
            <p className="text-xl text-muted-foreground">Estamos aquí para ayudarte con tus proyectos tecnológicos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Phone className="h-8 w-8 text-secondary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Teléfono</h4>
              <p className="text-muted-foreground">+569 9949 3661</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-secondary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Email</h4>
              <p className="text-muted-foreground">rodrigo.viera@innovatecno.cl</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-secondary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Sitio Web</h4>
              <p className="text-muted-foreground">innovatecno.cl</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-secondary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Horarios</h4>
              <p className="text-muted-foreground">Lunes a Sábado<br />09:00 - 20:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">&copy; 2024 InnovaTecno SpA. Todos los derechos reservados.</p>
          <p className="text-sm opacity-80">Empresa chilena especializada en servicios de tecnología e infraestructura TI</p>
        </div>
      </footer>
    </div>
  );
}
