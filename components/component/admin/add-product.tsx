import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function AddProduct() {
  return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Añadir producto nuevo</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="title">Título del album</Label>
            <Input id="title" placeholder="Ingrese el titulo del producto" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Precio</Label>
            <Input id="price" min={1} placeholder="Ingrese el precio del producto" required type="number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Novedad del producto</Label>
            <Select defaultValue="">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Elija novedad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="-">-</SelectItem>
                <SelectItem value="oferta">Oferta</SelectItem>
                <SelectItem value="nuevo">Nuevo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="artist">Nombre del artista</Label>
            <Input id="artist" placeholder="Ingrese el nombre del artista" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Formato del producto</Label>
            <div>
              <div className="flex items-center space-x-2">
                <Checkbox id="status-oferta" value="oferta" />
                <Label htmlFor="status-oferta">Vinilo</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="status-nuevo" value="nuevo" />
                <Label htmlFor="status-nuevo">Cd</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="status-popular" value="popular" />
                <Label htmlFor="status-popular">Cassette</Label>
              </div>
            </div>
          </div>
        </form>
        <div className="mt-6 flex justify-end">
          <Button size="lg">Guardar producto</Button>
        </div>
      </div>
    </div>
    
  )
}
