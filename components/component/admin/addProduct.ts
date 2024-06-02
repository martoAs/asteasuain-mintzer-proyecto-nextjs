'use server';
import { prisma } from '../../../lib/prisma';

export async function addProduct(title: string, price: number, status: string, artist: string, formats: string[]) {
    let product;
    let formatIds = [];
    console.log('Formats', formats);
  
    try {
     
      product = await prisma.album.create({
        data: {
          title,
          price,
          new : status === '-'? '': status,
          artist,
        }
      });
  
      
      for (let formatd of formats) {
        let formatEntry = await prisma.format.create({
          data: {
            id: product.id,
            format: formatd,
          }
        });
        console.log('Format created:', formatEntry);
        formatIds.push(formatEntry.key);
      }
  
      console.log('Product created:', product);
      console.log('Format IDs:', formatIds);
      return { product, formatIds };
    } catch (error) {
      console.error('Error creating product:', error);
      if (product) {
        await prisma.album.delete({
          where: {
            id: product.id,
          },
        });
      }
      throw new Error('Failed to create product.');
    }
  }