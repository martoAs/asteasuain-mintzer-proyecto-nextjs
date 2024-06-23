'use client';
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {SelectValue, SelectTrigger, SelectItem, SelectContent, Select} from "@/components/ui/select"
import {Button} from "@/components/ui/button"
import {Checkbox} from "@/components/ui/checkbox"
import {SetStateAction, useEffect, useState} from "react"

import Link from "next/link";
import {AlbumWithFormats, MyFormData, MyFormDataEdit} from "@/app/data/data";
import {updateAlbum} from "@/components/component/admin/editProduct";
import {editProductInDataBase} from "@/app/lib/actions";

export function EditProduct({data}: { data: AlbumWithFormats }) {
    const initialState = {message: null, errors: {}};
    const [title, setTitle] = useState(data.title);
    const [price, setPrice] = useState(data.price);
    const [status, setStatus] = useState(data.new || "");
    const [artist, setArtist] = useState(data.artist);
    const [formats, setFormats] = useState<string[]>(data.formats.map((format) => format.format))

    //Si tengo estado nuevo u oferta lo seteo
    useEffect(() => {
        if (data.new) {
            setStatus(data.new);
        }
    }, [data]);

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
            const formData: MyFormDataEdit = {
                id: data.id,
                title: title,
                price: price,
                new: status,
                artist: artist,
                formats: formats
            };

            const result = await editProductInDataBase(initialState, formData);
            if(result && result.errors){
                alert("An error has occurred, please check all the fields")
            }
            else{
                alert("Product edited successfully")
            }

        } catch (error) {
            console.error('Error editing product:', error);
        }
    };


    const handleStatusChange = (value: SetStateAction<string>) => {
        setStatus(value);
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 py-8 m-4 relative">
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 absolute">
                <h1 className="text-2xl font-bold mb-6">Edit product</h1>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleEditProduct}>
                    <div className="space-y-2">
                        <Label htmlFor="title">Album title</Label>
                        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)}
                               placeholder="Enter album title"/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <Input id="price" value={price} onChange={(e) => setPrice(Number(e.target.value))} min={1}
                               placeholder="Enter product price" required type="number" step="0.01"/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="status">Product newness</Label>
                        <Select defaultValue="" onValueChange={handleStatusChange}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choose newness"/>
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
                        <Input id="artist" value={artist} onChange={(e) => setArtist(e.target.value)}
                               placeholder="Enter artist name"/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="status">Product format</Label>
                        <div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="status-vinilo" value="vinyl"
                                          onClick={() => handleCheckboxChange('vinyl')}
                                          checked={formats.includes('vinyl')}/>
                                <Label htmlFor="status-vinilo">Vinyl</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="status-cd" value="cd" onClick={() => handleCheckboxChange('cd')}
                                          checked={formats.includes('cd')}/>
                                <Label htmlFor="status-cd">Cd</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="status-cassette" value="cassette"
                                          onClick={() => handleCheckboxChange('cassette')}
                                          checked={formats.includes('cassette')}/>
                                <Label htmlFor="status-cassette">Cassette</Label>
                            </div>
                        </div>
                    </div>
                    {formats.length > 0 ? (
                        <Button type="submit" size="lg">Edit product</Button>
                    ) : (
                        <Button type="submit" size="lg" disabled>
                            Edit product (Missing fields)
                        </Button>
                    )}
                </form>
                <Link href="/admin">
                    <div className="mt-6 flex justify-end">
                        <Button size="lg">Return</Button>
                    </div>
                </Link>
            </div>
        </div>

    )
}
