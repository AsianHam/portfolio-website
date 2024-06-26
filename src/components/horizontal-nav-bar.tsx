import Link from 'next/link';
import { NavItem } from './nav-item';
import Java from '/public/java.svg';
import { RefObject } from 'react';

export const HorizontalNavBar = ({
  experienceRef,
  portfolioRef,
  contactRef,
  isHomePage = true,
}: {
  experienceRef: RefObject<HTMLElement>;
  portfolioRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
  isHomePage?: boolean;
}) => {
  const handleClick = (ref: RefObject<HTMLElement>, hash: string) => {
    if (history.pushState) {
      history.pushState(null, '', hash);
    } else {
      location.hash = hash;
    }
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className='hidden 768:flex fixed w-full h-20 justify-between bg-shark drop-shadow-md z-50'>
      <span className='flex py-4 pl-8'>
        <NavItem
          icon={<Java className='h-full w-full text-torch-red' />}
          href='/'
          iconSize='h-full'
          linkClassName='h-full'
          label='home'
        />
      </span>
      {isHomePage ? (
        <div className='flex h-full items-center gap-4 pr-8 text-iron text-lg'>
          <button
            onClick={() => handleClick(experienceRef, '#experience')}
            className='hover:text-torch-red'
          >
            Experience
          </button>
          <button
            onClick={() => handleClick(portfolioRef, '#portfolio')}
            className='hover:text-torch-red'
          >
            Portfolio
          </button>
          <button
            onClick={() => handleClick(contactRef, '#contact-me')}
            className='hover:text-torch-red'
          >
            Contact
          </button>
          <Link href='/components' className='hover:text-torch-red'>
            Components
          </Link>
        </div>
      ) : (
        <div className='flex h-full items-center gap-4 pr-8 text-iron text-lg'>
          <Link href='/#experience' className='hover:text-torch-red'>
            Experience
          </Link>
          <Link href='/#portfolio' className='hover:text-torch-red'>Portfolio</Link>
          <Link href='/#contact-me' className='hover:text-torch-red'>Contact</Link>
          <Link href='/components' className='hover:text-torch-red'>Components</Link>
        </div>
      )}
    </nav>
  );
};
