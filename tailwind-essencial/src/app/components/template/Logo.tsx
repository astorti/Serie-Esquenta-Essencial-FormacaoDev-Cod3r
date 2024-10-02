import { IconBrandTailwind } from '@tabler/icons-react'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/">
            <div className='flex gap-2 items-center'>
                <IconBrandTailwind size={40} stroke={1} />
                <div>
                    <span className='font-black'>Tailwind </span>
                    <span>Essencial</span>
                </div>
            </div>
        </Link>
    )
}