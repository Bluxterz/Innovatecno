import { Button } from "@/components/ui/button"
import { Shield, Camera, Monitor } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          InnovaTecno
          <br />
          <span className="text-secondary">Soluciones Tecnológicas</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
          Empresa chilena especializada en servicios de tecnología, infraestructura TI, 
          soporte técnico y soluciones integrales para su negocio.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-secondary" />
            <span>Soporte 24/7</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Monitor className="h-4 w-4 text-secondary" />
            <span>Infraestructura TI</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Camera className="h-4 w-4 text-secondary" />
            <span>Seguridad CCTV</span>
          </div>
        </div>
        <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90">
          <span className="relative z-10">Solicitar Cotización</span>
          <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
        </Button>
      </div>
    </div>
  )
}