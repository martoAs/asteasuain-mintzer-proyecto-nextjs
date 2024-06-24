'use client';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { SetStateAction, useState } from "react";
import Link from "next/link";
import {addProductToDataBase} from "@/app/lib/actions";
import {MyFormData} from "@/app/data/data";

export function AddProduct() {
  const initialState = {message: null, errors: {}};
  const [errors, setErrors] = useState("");
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
      const formData: MyFormData = {title, price, new: status, artist, formats};
      const result = await addProductToDataBase(initialState, formData);
      if (result && result.errors) {
        setErrors(result.message);
        return;
      }
      setTitle("");
      setPrice(0);
      setStatus("-");
      setArtist("");
      setFormats([]);
      setErrors("");
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleStatusChange = (value: SetStateAction<string>) => { 
    setStatus(value);
  };


  return (
      <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden relative container mx-auto max-w-4xl px-4 py-8">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Add new product</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSaveProduct}>
          <div className="space-y-2">
            <Label htmlFor="title">Album title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter the product title"/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input id="price" value={price} onChange={(e)=> setPrice(Number(e.target.value))} min={1} placeholder="Enter the product price" type="number" step="0.01" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Product newness</Label>
            <Select defaultValue="-" onValueChange={handleStatusChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose newness" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="-">-</SelectItem>
                  <SelectItem value="special offer">Special offer</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="artist">Artist name</Label>
            <Input id="artist" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Enter the artist name"/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Product format</Label>
            <div>
              <div className="flex items-center space-x-2">
                <Checkbox id="status-vinilo" value="vinilo" onClick={() => handleCheckboxChange('vinyl')} checked={formats.includes('vinyl')}/>
                <Label htmlFor="status-vinilo">Vinyl</Label>
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
              <Button type="submit" size="lg">Save product</Button>
          ) : (
              <Button type="submit" size="lg" disabled>
                Save product (Missing fields)
              </Button>
          )}


        </form>
        {errors!="" && (
            <div className="py-5 flex">
              {Object.values(errors).map((error, index) => (
                  <p className="mt-2 text-sm text-red-500" key={index}>{error}</p>
              ))}
            </div>
        )}
        <Link href="/admin">
          <div className="mt-6 flex justify-end">
            <Button size="lg">Return</Button>
          </div>
        </Link>

      </div>
    </div>
    
  )
}
