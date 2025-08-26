import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo-innovacteno.jpeg" 
            alt="InnovaTecno Logo" 
            width={50} 
            height={50}
            className="rounded-lg"
          />
          <div>
            <h1 className="text-2xl font-bold text-blue-600">InnovaTecno</h1>
            <p className="text-sm text-gray-600">Servicios de Tecnología e Infraestructura TI</p>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#servicios" className="text-gray-700 hover:text-orange-500 transition-colors">
            Servicios
          </Link>
          <Link href="#experiencia" className="text-gray-700 hover:text-orange-500 transition-colors">
            Experiencia
          </Link>
          <Link href="#contacto" className="text-gray-700 hover:text-orange-500 transition-colors">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-orange-500" />
              <span>+569 9949 3661</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-orange-500" />
              <span>rodrigo.viera@innovatecno.cl</span>
            </div>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Cotizar</Button>
        </div>
      </div>
    </header>
  )
}
