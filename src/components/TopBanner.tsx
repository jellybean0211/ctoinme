import Link from "next/link"

export function TopBanner() {
  return (
    <div className="flex w-full min-h-14 items-center justify-center gap-4 bg-gradient-to-b from-blue-500 to-blue-600 px-4 py-2 text-center">
      <p className="text-sm font-medium text-white">
        Even beginners can build their first money-making project with AI
      </p>
      <Link
        href="#pricing"
        className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/20 bg-white px-4 py-1.5 text-sm font-medium text-blue-600 transition hover:bg-white/90"
      >
        Buy Now
      </Link>
    </div>
  )
}
