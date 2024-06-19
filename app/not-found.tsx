import Link from 'next/link';
import Button from "@mui/joy/Button";

export default function NotFoundPage() {
    return (
        <main className="py-12 md:py-24 lg:py-32 bg-[#191D23] text-gray-100 flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <h2 className="text-xl font-semibold">404 Not Found</h2>
            <p>No pudimos encontrar el album solicitado.</p>
            <Button variant="solid" className="my-5 bg-[#59999C] hover:bg-[#5FC8CD]" size="lg">
                <Link
                    href="/store"
                >
                    Volvé a la tienda
                </Link>
            </Button>
        </main>
    );
}