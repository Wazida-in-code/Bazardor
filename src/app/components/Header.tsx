import Link from 'next/link';

interface navItemType{
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}

const Header = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
    const navItems:navItemType[] = await res.json();
    
    return (
        <header className="w-11/12 mx-auto">
            <div className='flex gap-10 border-b border-gray-200'>
                {
                    navItems.map(item => <Link className='my-4' key={item.id} href={"/"}>{item.icon}{item.nameBn}</Link>)
                }
            </div>
        </header>
    );
};

export default Header;