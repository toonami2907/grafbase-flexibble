import { NavLinks } from '@/constant'
import { Session } from 'inspector'
import Image from 'next/image'
import  Link from 'next/link'
import AuthProviders from './AuthProviders'

const Navbar = () => {
    const Session = {};
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
    <Link href='/'>
        <Image 
        src='/logo.svg'
        width={115}
        alt='flexibble'
        height={43}
        />
        
    </Link>
    <ul className='xl:flex hidden
    text-small gap-7'>
        {NavLinks.map((link) =>(
            <Link href={link.href} key={link.key}>
                {link.text}
            </Link>
        ))}

    </ul>
        <div className='flexCenter gap-4'>
            {Session ? (
                <>
                UserPhoto

                <Link href='/create-project'>
                    Share Work
                </Link>
                </>
            ) : (
                <AuthProviders/>
            )}
        </div>
        </div> 
    </nav>
  )
}

export default Navbar