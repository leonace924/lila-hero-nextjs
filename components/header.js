import Link from "next/link"

const menu = [
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Launch App",
    url: "/launch-app",
  },
]

export function Header() {
  return (
    <header className="fixed top-6 lg:top-12 z-50 w-full px-[5vw] md:px-[10vw]">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="uppercase text-lila-dark text-2xl md:text-3xl leading-[1.15] font-medium"
        >
          Lila
        </Link>

        <nav>
          <ul className="flex items-center gap-4 md:gap-8">
            {menu.map((item, index) => (
              <li
                className="text-base text-lila-gray-200 md:text-lg"
                key={index}
              >
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
