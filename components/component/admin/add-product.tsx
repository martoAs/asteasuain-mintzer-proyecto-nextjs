'use client';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { SetStateAction, useState } from "react"
import { addProduct } from "./addProduct"

export function AddProduct() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0.00);
  const [status, setStatus] = useState("");
  const [artist, setArtist] = useState("");
  const [formats, setFormats] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    // Check if the value is already in the array
    if (formats.includes(value)) {
      // If it is, remove it from the array
      setFormats(formats.filter((format) => format !== value));
    } else {
      // If it's not, add it to the array
      setFormats([...formats, value]);
    }
  };

  const handleSaveProduct = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      await addProduct(title, price, status, artist, formats);
      setTitle("");
      setPrice(0);
      setStatus("");
      setArtist("");
      setFormats([]);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleStatusChange = (value: SetStateAction<string>) => { 
    setStatus(value);
  };


  return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Añadir producto nuevo</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSaveProduct}>
          <div className="space-y-2">
            <Label htmlFor="title">Título del album</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ingrese el titulo del producto" />  
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Precio</Label>
            <Input id="price" value={price} onChange={(e)=> setPrice(Number(e.target.value))} min={1} placeholder="Ingrese el precio del producto" required type="number" step="0.01" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Novedad del producto</Label>
            <Select defaultValue="" onValueChange={handleStatusChange}>
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
            <Input id="artist" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Ingrese el nombre del artista" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Formato del producto</Label>
            <div>
              <div className="flex items-center space-x-2">
                <Checkbox id="status-vinilo" value="vinilo" onClick={() => handleCheckboxChange('vinilo')} checked={formats.includes('vinilo')}/>
                <Label htmlFor="status-vinilo">Vinilo</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="status-cd" value="cd" onClick={() => handleCheckboxChange('cd')} checked={formats.includes('cd')} />
                <Label htmlFor="status-cd">Cd</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="status-cassette" value="cassette" onClick={() => handleCheckboxChange('cassette')} checked={formats.includes('cassette')} />
                <Label htmlFor="status-cassette">Cassette</Label>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button type="submit" size="lg">Guardar producto</Button>
          </div>
        </form>

      </div>
    </div>
    
  )
}
