import Link from "next/link"
import { JSX, SVGProps } from "react"

export function Success() {
  return (
      <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 md:px-6 bg-[#191D23]">
        <div className="max-w-md text-center space-y-4">
          <CircleCheckIcon className="mx-auto text-green-500 size-16"/>
          <h1 className="text-3xl font-bold text-white">Congratulations!</h1>
          <p className="text-muted-foreground text-white">
            You have successfully completed the payment process.
          </p>
          <Link
              href="https://www.youtube.com/watch?v=s0E5Slqdo1M"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
          >
            Return to the store
          </Link>
        </div>
      </div>
  )
}

function CircleCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}