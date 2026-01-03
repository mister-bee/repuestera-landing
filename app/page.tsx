import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Phone, MapPin, Clock, CheckCircle, Menu } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="Repuestera San Cayetano"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h1 className="text-lg font-bold tracking-tight text-foreground">REPUESTERA</h1>
                <h2 className="text-sm font-semibold tracking-wider text-muted-foreground">SAN CAYETANO</h2>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#servicios" className="text-sm font-medium hover:text-primary transition-colors">
                SERVICIOS
              </a>
              <a href="#nosotros" className="text-sm font-medium hover:text-primary transition-colors">
                NOSOTROS
              </a>
              <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
                CONTACTO
              </a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">CONTACTAR</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6">
                TU TALLER DE <span className="text-primary">CONFIANZA</span> EN ROSARIO DE LERMA
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Especialistas en reparación y mantenimiento de motos y bicicletas. Servicio profesional, repuestos de
                calidad y atención personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg h-14 px-8"
                >
                  CONTACTAR AHORA
                </Button>
                <Button size="lg" variant="outline" className="font-bold text-lg h-14 px-8 border-2 bg-transparent">
                  VER SERVICIOS
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/mechanic.jpg"
                alt="Taller de motos"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">NUESTROS SERVICIOS</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones completas para mantener tu vehículo en perfectas condiciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "REPARACIÓN DE MOTOS",
                description: "Diagnóstico y reparación de todo tipo de motocicletas",
                icon: Wrench,
              },
              {
                title: "SERVICIO DE BICICLETAS",
                description: "Mantenimiento completo y reparación de bicis",
                icon: Wrench,
              },
              {
                title: "REPUESTOS ORIGINALES",
                description: "Amplio stock de repuestos de calidad garantizada",
                icon: CheckCircle,
              },
              {
                title: "MANTENIMIENTO PREVENTIVO",
                description: "Servicios programados para alargar la vida útil",
                icon: Clock,
              },
              {
                title: "DIAGNÓSTICO TÉCNICO",
                description: "Evaluación profesional de fallas y problemas",
                icon: Wrench,
              },
              {
                title: "ASESORAMIENTO",
                description: "Orientación experta para el cuidado de tu vehículo",
                icon: CheckCircle,
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="bg-card border-2 border-border hover:border-primary transition-all group cursor-pointer"
                >
                  <CardContent className="p-8">
                    <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/shop.png"
                alt="Bicicleteria San Cayetano - Rosario de Lerma"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                MÁS QUE UN TALLER, <span className="text-primary">SOMOS FAMILIA</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                En Repuestera San Cayetano llevamos años sirviendo a la comunidad de Rosario de Lerma y alrededores.
                Nuestro compromiso es brindar servicios de excelencia con la calidez y confianza de un negocio familiar.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Cada cliente es parte de nuestra historia. Trabajamos con pasión y dedicación para que tu experiencia
                sea excepcional, desde la primera consulta hasta la entrega de tu vehículo.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Compromiso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">NUESTRO TRABAJO</h2>
            <p className="text-xl text-muted-foreground">Calidad y profesionalismo en cada proyecto</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Reparación de Motor", icon: "🔧" },
              { label: "Mantenimiento de Ruedas", icon: "🚲" },
              { label: "Herramientas del Taller", icon: "🛠️" },
              { label: "Repuestos de Motos", icon: "⚙️" },
              { label: "Limpieza de Cadenas", icon: "🔗" },
              { label: "Diagnóstico Técnico", icon: "📋" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer bg-gradient-to-br from-primary/20 to-secondary/40 flex flex-col items-center justify-center"
              >
                <span className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-lg font-semibold text-foreground/80">{item.label}</span>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-primary">VISITANOS</span> O CONTACTANOS
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Estamos ubicados en el corazón de Rosario de Lerma, Salta. Pasá por el taller o comunicate con nosotros
                para consultas y presupuestos.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">DIRECCIÓN</h3>
                    <p className="text-muted-foreground">
                      Av. Cecilio Rodríguez 197
                      <br />
                      Rosario de Lerma, Salta
                      <br />
                      Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">TELÉFONO / WHATSAPP</h3>
                    <a
                      href="https://wa.me/5493874857539"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +54 9 387 485 7539
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">HORARIOS</h3>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 8:00 - 18:00
                      <br />
                      Sábados: 8:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold mb-4 text-xl">UBICACIÓN</h3>
                <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg border-2 border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.5614491035917!2d-65.58476492472579!3d-24.981031277850786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941be3e6043faa0b%3A0x25879e0665245487!2sAv.%20Cecilio%20Rodr%C3%ADguez%20197%2C%20A4405%20Rosario%20de%20Lerma%2C%20Salta!5e0!3m2!1sen!2sar!4v1767393556501!5m2!1sen!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <Card className="bg-card border-2 border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">ENVIANOS TU CONSULTA</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email o Teléfono
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Contanos qué necesitás..."
                    />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg h-12">
                    ENVIAR MENSAJE
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="Repuestera San Cayetano"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">REPUESTERA SAN CAYETANO</h3>
                <p className="text-sm text-muted-foreground">Rosario de Lerma, Salta</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Repuestera San Cayetano. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
