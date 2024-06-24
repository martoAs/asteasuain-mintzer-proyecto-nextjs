
import { prisma } from '../lib/prisma';

async function main() {
    const albums = [
      { title: 'Abbey Road', price: 10.99, new: 'Nuevo', artist: 'The Beatles' },
      { title: 'Blonde On Blonde', price: 9.99, new: 'Oferta', artist: 'Bob Dylan' },
      { title: 'Are You Experienced', price: 12.99, new: '', artist: 'Jimi Hendrix' },
      { title: 'The Dark Side of the Moon', price: 11.99, new: 'Nuevo', artist: 'Pink Floyd' },
      { title: 'Led Zeppelin IV', price: 10.99, new: '', artist: 'Led Zeppelin' },
      { title: 'Revolver', price: 9.99, new: 'Oferta', artist: 'The Beatles' },
      { title: 'Sticky Fingers', price: 11.99, new: '', artist: 'The Rolling Stones' },
      { title: "Who's Next", price: 12.99, new: '', artist: 'The Who' },
      { title: 'The Doors', price: 10.99, new: '', artist: 'The Doors' },
      { title: 'A Night at the Opera', price: 11.99, new: '', artist: 'Queen' },
      { title: 'The Velvet Underground & Nico', price: 9.99, new: 'Oferta', artist: 'The Velvet Underground' },
      { title: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars', price: 12.99, new: 'Nuevo', artist: 'David Bowie' },
      { title: 'Ramones', price: 10.99, new: '', artist: 'The Ramones' },
      { title: 'Synchronicity', price: 11.99, new: '', artist: 'The Police' },
      { title: 'The Queen Is Dead', price: 12.99, new: '', artist: 'The Smiths' },
      { title: 'Disintegration', price: 11.99, new: '', artist: 'The Cure' },
      { title: 'Unknown Pleasures', price: 9.99, new: 'Oferta', artist: 'Joy Division' },
      { title: 'London Calling', price: 10.99, new: '', artist: 'The Clash' },
    ];
  
    for (const album of albums) {
      await prisma.album.create({
        data: album,
      });
    }
  }
  
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });