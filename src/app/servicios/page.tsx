import Header from "@/components/custom/Header";
import { Shield, Laptop, Camera, Monitor, Users, BookOpen, Phone, Mail, CheckCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Servicios() {
    const services = [
        {
            icon: Shield,
            title: "Soporte Técnico 24/7",
            description: "Asistencia remota y presencial para resolver cualquier problema tecnológico de manera rápida y eficiente.",
            features: [
                "Soporte remoto inmediato",
                "Asistencia técnica presencial", 
                "Mantenimiento preventivo",
                "Diagnóstico y reparación de equipos",
                "Configuración de software y sistemas"
            ],
            price: "Cotización personalizada"
        },
        {
            icon: Laptop,
            title: "Venta de Software Empresarial",
            description: "Soluciones de software adaptadas a las necesidades específicas de su empresa para optimizar procesos.",
            features: [
                "Software de gestión empresarial",
                "Licencias Microsoft Office y Windows",
                "Sistemas de facturación electrónica",
                "Software de contabilidad",
                "Soluciones personalizadas"
            ],
            price: "Cotización personalizada"
        },
        {
            icon: Monitor,
            title: "Infraestructura TI",
            description: "Diseño, implementación y mantenimiento de infraestructura tecnológica robusta y escalable.",
            features: [
                "Diseño de redes empresariales",
                "Servidores y almacenamiento",
                "Virtualización de sistemas",
                "Backup y recuperación de datos",
                "Migración a la nube"
            ],
            price: "Cotización personalizada"
        },
        {
            icon: Camera,
            title: "Sistemas CCTV y Seguridad",
            description: "Sistemas de vigilancia avanzados para proteger su empresa con tecnología de última generación.",
            features: [
                "Cámaras IP de alta definición",
                "Sistema de grabación digital",
                "Monitoreo remoto 24/7",
                "Análisis inteligente de video",
                "Integración con sistemas de alarma"
            ],
            price: "Cotización personalizada"
        },
        {
            icon: Users,
            title: "Venta de Equipos Tecnológicos",
            description: "Hardware y equipamiento tecnológico de última generación con garantía y soporte especializado.",
            features: [
                "Computadores y laptops empresariales",
                "Impresoras y equipos multifuncionales",
                "Equipos de red y comunicaciones",
                "Servidores y almacenamiento",
                "Accesorios y periféricos"
            ],
            price: "Precios competitivos"
        },
        {
            icon: BookOpen,
            title: "Salas de Clase Virtual",
            description: "Soluciones completas de educación virtual para instituciones educativas y empresas.",
            features: [
                "Plataformas de videoconferencia",
                "Sistemas de gestión de aprendizaje",
                "Pizarras digitales interactivas",
                "Equipos audiovisuales",
                "Capacitación y soporte técnico"
            ],
            price: "Cotización personalizada"
        }
    ];

    const benefits = [
        {
            icon: CheckCircle,
            title: "Garantía Total",
            description: "Todos nuestros servicios incluyen garantía completa"
        },
        {
            icon: Clock,
            title: "Disponibilidad 24/7",
            description: "Soporte técnico disponible las 24 horas del día"
        },
        {
            icon: MapPin,
            title: "Cobertura Nacional",
            description: "Servicios disponibles en todo Chile"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                        Nuestros Servicios
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto mb-8">
                        Soluciones tecnológicas completas para empresas e instituciones. 
                        Más de 11 años de experiencia respaldando el crecimiento de nuestros clientes desde 2013.
                    </p>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                        Solicitar Cotización
                    </Button>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow items-center">
                                    <div className="flex items-start mb-6">
                                        <div className="bg-orange-100 p-3 rounded-lg mr-4">
                                            <IconComponent className="h-8 w-8 text-orange-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                            <p className="text-gray-600 mb-4">{service.description}</p>
                                            <div className="text-lg font-semibold text-orange-500 mb-4">
                                                {service.price}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center">
                                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                            Más Información
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h2>
                        <p className="text-xl text-gray-600">Compromiso con la excelencia y resultados garantizados</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="h-8 w-8 text-orange-500" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Contacta con nuestro equipo de expertos y descubre cómo podemos 
                        ayudarte a optimizar la tecnología de tu empresa.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="flex items-center gap-2">
                            <Phone className="h-5 w-5 text-orange-500" />
                            <span className="text-lg">+56 9 2973 8623</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-5 w-5 text-orange-500" />
                            <span className="text-lg">rodrigo.viera@innovatecno.cl</span>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg mr-4">
                            Llamar Ahora
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                            Enviar Email
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-600 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="mb-4">&copy; 2024 InnovaTecno SpA. Todos los derechos reservados.</p>
                    <p className="text-sm opacity-80">Empresa chilena especializada en servicios de tecnología e infraestructura TI</p>
                </div>
            </footer>
        </div>
    );
}