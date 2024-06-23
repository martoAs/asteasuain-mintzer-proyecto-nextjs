'use server';
import {signIn} from '@/auth';
import {AuthError} from 'next-auth';
import {z} from 'zod';
import {addProduct} from "@/components/component/admin/addProduct";
import {updateAlbum} from "@/components/component/admin/editProduct";
import {MyFormData, MyFormDataEdit} from "../data/data";


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const ProductSchema = z.object({
    title: z.string().min(1, {message: "Please enter a title"}),
    price: z.coerce.number().gt(0, {message: "Please enter an amount grater than $0"}),
    new: z.enum(['-', 'special offer', 'new'], {invalid_type_error: "Please select a valid new"}),
    artist: z.string().min(1, {message: "Please enter an artist"}),
    formats: z.array((z.enum(['vinyl', 'cd', 'cassette']))).min(1,{message: "Please select a valid formats"}),
    });


export type State = {
  errors?: {
    title?: string;
    price?: number;
    new?: string;
    artist?: string;
    formats?: string[];
  };
    message?: string | null ;
};

function validateFormData(formData: MyFormData) {
  return ProductSchema.safeParse({
    title: formData.title,
    price: formData.price,
    new: formData.new,
    artist: formData.artist,
    formats: formData.formats,
  });
}

export async function addProductToDataBase(prevState: State, formData: MyFormData) {
  const validateFields = validateFormData(formData);

  if(!validateFields.success){
    const errorMessage = "Please check the fields and try again."
    return {errors: validateFields.error.flatten().fieldErrors, message: errorMessage}

  }
    const {title, price, new: status, artist, formats} = validateFields.data;
    await addProduct(title, price, status, artist, formats);

}

export async function editProductInDataBase(prevState: State, formData: MyFormDataEdit) {
  const validateFields = validateFormData(formData);

  if(!validateFields.success){
    const errorMessage = "Please check the fields and try again."
    return {errors: validateFields.error.flatten().fieldErrors, message: errorMessage}

  }
    const {title, price, new: status, artist, formats} = validateFields.data;
    await updateAlbum(formData.id,title, price, status, artist, formats);

}

