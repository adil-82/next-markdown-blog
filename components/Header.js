import Link from 'next/link';
export default function Header() {
    return (
        <header>
           <nav className="bg-blue-500 text-blue-100 px-8 py-4">
               <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <Logo />
                    <SiteNav />
               </div>
            </nav> 
        </header>
    )
}

function Logo() {
    return (
        <Link href="/">
            <a className="relative inline-block p-2">
                <span className="bg-white absolute inset-0 transform rounded skew-y-1 skew-x-12"></span>
                <span className="relative font-bold text-blue-800 md:text-2xl text-lg">
                    Dev Blog
                </span>
            </a>
        </Link>
    )
}

function SiteNav() {
    return (
        <div className="flex items-center">
            <Link href="/doc"><a className="font-semibold py-2 md:px-3 px-1 bg-blue-700 hover:bg-blue-300 rounded-lg hover:text-white sm:text-base text-sm">Doc</a></Link>
            <Link href="/examples"><a className="font-semibold py-2 md:px-3 px-1 ml-2 bg-blue-700 hover:bg-blue-300 rounded-lg hover:text-white sm:text-base text-sm">Examples</a></Link>
            <Link href="/contact"><a className="font-semibold py-2 md:px-3 px-1 ml-2 bg-blue-700 hover:bg-blue-300 rounded-lg hover:text-white sm:text-base text-sm">Contact</a></Link>
        </div>
    )
}