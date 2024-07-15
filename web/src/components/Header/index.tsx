import Image from 'next/image';
import logo from '@images/coopers-logo.png';

export function Header() {
  return (
    <header className="flex flex-col p-12 items-center sm:flex-row sm:justify-between">
      <Image
        src={logo}
        alt="Logo Coopers Digital Production"
        width={217}
        height={50}
      />
      <button className="mt-4 bg-black px-6 py-0 w-full sm:w-auto sm:mt-0">
        <p className="text-white">entrar</p>
      </button>
    </header>
  );
}