'use client';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { SetStateAction, useState } from "react"

import Link from "next/link";
import {AlbumWithFormats} from "@/app/data/data";

export function EditProduct({data}: {data : AlbumWithFormats} ){

  const [title, setTitle] = useState(data.title);
  const [price, setPrice] = useState(data.price);
  const [status, setStatus] = useState("");
  const [artist, setArtist] = useState(data.artist);
  const [formats, setFormats] = useState<string[]>(data.formats.map((format) => format.format))

  //Si tengo estado nuevo u oferta lo seteo
  if(data.new){
    setStatus(data.new)
  }

  const handleCheckboxChange = (value: string) => {
    if (formats.includes(value)) {
      setFormats(formats.filter((format) => format !== value));
    } else {
      setFormats([...formats, value]);
    }
  };

  const handleEditProduct = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
     // await addProduct(title, price, status, artist, formats);
      setTitle("");
      setPrice(0);
      setStatus("");
      setArtist("");
      setFormats([]);
    } catch (error) {
      console.error('Error editing product:', error);
    }
  };

  const handleStatusChange = (value: SetStateAction<string>) => { 
    setStatus(value);
  };


  return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Añadir producto nuevo</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleEditProduct}>
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
          {formats.length > 0 ? (
              <Button type="submit" size="lg">Editar producto</Button>
          ) : (
              <Button type="submit" size="lg" disabled>
                Editar producto (Faltan datos)
              </Button>
          )}
        </form>
        <Link href="/admin">
          <div className="mt-6 flex justify-end">
            <Button size="lg">Volver</Button>
          </div>
        </Link>
      </div>
    </div>
    
  )
}
