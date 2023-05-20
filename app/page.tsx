import {
  BsChevronLeft,
  BsChevronRight,
  BsColumns,
  BsSuitHeartFill,
  BsThreeDots,
} from 'react-icons/bs';
import { MdHomeFilled } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { BiLibrary } from 'react-icons/bi';
import { GrPlayFill } from 'react-icons/gr';
import {
  AiFillStepBackward,
  AiFillStepForward,
  AiOutlineSound,
} from 'react-icons/ai';
import { IoShuffle } from 'react-icons/io5';
import { TbDevices2, TbMicrophone2, TbRepeat } from 'react-icons/tb';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 px-6 py-4">
          <BsThreeDots size={26} />
          <div className="mt-4 flex flex-col gap-y-4">
            <a
              href="#"
              className="text-sm font-semibold flex items-center gap-x-3"
            >
              <MdHomeFilled size={26} />
              Início
            </a>
            <a
              href="#"
              className="text-sm font-semibold flex items-center gap-x-3 text-zinc-400 hover:text-white transition"
            >
              <FiSearch size={26} />
              Buscar
            </a>
            <a
              href="#"
              className="text-sm font-semibold flex items-center gap-x-3 text-zinc-400 hover:text-white transition"
            >
              <BiLibrary size={26} />
              Sua Biblioteca
            </a>
          </div>
        </aside>
        <main className="flex-1 bg-neutral-900/60 px-6 py-4 ">
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full bg-black/70">
              <BsChevronLeft size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-black/70">
              <BsChevronRight size={20} />
            </a>
          </div>

          <h1 className="mt-6 font-bold text-3xl">Boa noite</h1>

          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-800 hover:bg-neutral-700 group flex items-center gap-4 w-full rounded-md overflow-hidden transition">
              <Image src="/album.png" alt="Album" width={84} height={84} />
              <span className="font-semibold">Músicas curtidas</span>
              <a
                href="#"
                className="ml-auto mr-4 bg-green-400 text-black p-3 rounded-full shadow-md invisible group-hover:visible"
              >
                <GrPlayFill size={20} />
              </a>
            </div>
            <div className="bg-neutral-800 hover:bg-neutral-700 group flex items-center gap-4 w-full rounded-md overflow-hidden transition">
              <Image src="/album.png" alt="Album" width={84} height={84} />
              <span className="font-semibold">WIU</span>
              <a
                href="#"
                className="ml-auto mr-4 bg-green-400 text-black p-3 rounded-full shadow-md invisible group-hover:visible"
              >
                <GrPlayFill size={20} />
              </a>
            </div>
            <div className="bg-neutral-800 hover:bg-neutral-700 group flex items-center gap-4 w-full rounded-md overflow-hidden transition">
              <Image src="/album.png" alt="Album" width={84} height={84} />
              <span className="font-semibold">WIU</span>
              <a
                href="#"
                className="ml-auto mr-4 bg-green-400 text-black p-3 rounded-full shadow-md invisible group-hover:visible"
              >
                <GrPlayFill size={20} />
              </a>
            </div>
            <div className="bg-neutral-800 hover:bg-neutral-700 group flex items-center gap-4 w-full rounded-md overflow-hidden transition">
              <Image src="/album.png" alt="Album" width={84} height={84} />
              <span className="font-semibold">WIU</span>
              <a
                href="#"
                className="ml-auto mr-4 bg-green-400 text-black p-3 rounded-full shadow-md invisible group-hover:visible"
              >
                <GrPlayFill size={20} />
              </a>
            </div>
            <div className="bg-neutral-800 hover:bg-neutral-700 group flex items-center gap-4 w-full rounded-md overflow-hidden transition">
              <Image src="/album.png" alt="Album" width={84} height={84} />
              <span className="font-semibold">WIU</span>
              <a
                href="#"
                className="ml-auto mr-4 bg-green-400 text-black p-3 rounded-full shadow-md invisible group-hover:visible"
              >
                <GrPlayFill size={20} />
              </a>
            </div>
            <div className="bg-neutral-800 hover:bg-neutral-700 group flex items-center gap-4 w-full rounded-md overflow-hidden transition">
              <Image src="/album.png" alt="Album" width={84} height={84} />
              <span className="font-semibold">WIU</span>
              <a
                href="#"
                className="ml-auto mr-4 bg-green-400 text-black p-3 rounded-full shadow-md invisible group-hover:visible"
              >
                <GrPlayFill size={20} />
              </a>
            </div>
          </div>

          <h1 className="mt-6 font-bold text-2xl">
            Com base no que você ouviu recentemente
          </h1>

          <div className="grid grid-cols-8 mt-6 gap-6">
            <a
              href="#"
              className="w-full p-4 bg-neutral-900 hover:bg-neutral-800 flex flex-col gap-2 rounded-md transition"
            >
              <Image
                src="/album.png"
                alt="Album"
                width={156}
                height={156}
                className="w-full object-cover rounded"
              />
              <span className="font-bold">Funk Hits</span>
              <p className="text-sm text-neutral-400">
                Os Bico Tão Se Perguntando e os funks...
              </p>
            </a>
            <a
              href="#"
              className="w-full p-4 bg-neutral-900 hover:bg-neutral-800 flex flex-col gap-2 rounded-md transition"
            >
              <Image
                src="/album.png"
                alt="Album"
                width={156}
                height={156}
                className="w-full object-cover rounded"
              />
              <span className="font-bold">Funk Hits</span>
              <p className="text-sm text-neutral-400">
                Os Bico Tão Se Perguntando e os funks...
              </p>
            </a>
            <a
              href="#"
              className="w-full p-4 bg-neutral-900 hover:bg-neutral-800 flex flex-col gap-2 rounded-md transition"
            >
              <Image
                src="/album.png"
                alt="Album"
                width={156}
                height={156}
                className="w-full object-cover rounded"
              />
              <span className="font-bold">Funk Hits</span>
              <p className="text-sm text-neutral-400">
                Os Bico Tão Se Perguntando e os funks...
              </p>
            </a>
            <a
              href="#"
              className="w-full p-4 bg-neutral-900 hover:bg-neutral-800 flex flex-col gap-2 rounded-md transition"
            >
              <Image
                src="/album.png"
                alt="Album"
                width={156}
                height={156}
                className="w-full object-cover rounded"
              />
              <span className="font-bold">Funk Hits</span>
              <p className="text-sm text-neutral-400">
                Os Bico Tão Se Perguntando e os funks...
              </p>
            </a>
            <a
              href="#"
              className="w-full p-4 bg-neutral-900 hover:bg-neutral-800 flex flex-col gap-2 rounded-md transition"
            >
              <Image
                src="/album.png"
                alt="Album"
                width={156}
                height={156}
                className="w-full object-cover rounded"
              />
              <span className="font-bold">Funk Hits</span>
              <p className="text-sm text-neutral-400">
                Os Bico Tão Se Perguntando e os funks...
              </p>
            </a>
            <a
              href="#"
              className="w-full p-4 bg-neutral-900 hover:bg-neutral-800 flex flex-col gap-2 rounded-md transition"
            >
              <Image
                src="/album.png"
                alt="Album"
                width={156}
                height={156}
                className="w-full object-cover rounded"
              />
              <span className="font-bold">Funk Hits</span>
              <p className="text-sm text-neutral-400">
                Os Bico Tão Se Perguntando e os funks...
              </p>
            </a>
            <a
              href="#"
              className="w-full p-4 bg-neutral-900 hover:bg-neutral-800 flex flex-col gap-2 rounded-md transition"
            >
              <Image
                src="/album.png"
                alt="Album"
                width={156}
                height={156}
                className="w-full object-cover rounded"
              />
              <span className="font-bold">Funk Hits</span>
              <p className="text-sm text-neutral-400">
                Os Bico Tão Se Perguntando e os funks...
              </p>
            </a>
            <a
              href="#"
              className="w-full p-4 bg-neutral-900 hover:bg-neutral-800 flex flex-col gap-2 rounded-md transition"
            >
              <Image
                src="/album.png"
                alt="Album"
                width={156}
                height={156}
                className="w-full object-cover rounded"
              />
              <span className="font-bold">Funk Hits</span>
              <p className="text-sm text-neutral-400">
                Os Bico Tão Se Perguntando e os funks...
              </p>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-neutral-900/80 border-t border-neutral-800 p-4 flex items-center">
        <div className="flex items-center gap-4 flex-1">
          <Image src="/album.png" alt="Album" width={56} height={56} />
          <div className="flex flex-col">
            <a href="#" className="text-sm font-semibold hover:underline">
              Bandido Não Dança
            </a>
            <p className="text-xs text-neutral-400">
              <a href="#" className="hover:underline">
                Mc Paiva ZS
              </a>
              ,{' '}
              <a href="#" className="hover:underline">
                Gabb MC
              </a>
              ,{' '}
              <a href="#" className="hover:underline">
                Dj Aladin GDB
              </a>
              ,{' '}
              <a href="#" className="hover:underline">
                Love Funk
              </a>
            </p>
          </div>
          <a href="#" className="text-green-400">
            <BsSuitHeartFill size={24} />
          </a>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 flex-1">
          <div className="flex items-center gap-6">
            <a href="#" className="text-neutral-400">
              <IoShuffle size={24} />
            </a>
            <a href="#" className="text-neutral-400">
              <AiFillStepBackward size={24} />
            </a>

            <a
              href="#"
              className="bg-white p-2 rounded-full shadow-md flex items-center justify-center"
            >
              <GrPlayFill size={24} className="pl-0.5" />
            </a>

            <a href="#" className="text-neutral-400">
              <AiFillStepForward size={24} />
            </a>

            <a href="#" className="text-neutral-400">
              <TbRepeat size={24} />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-400">0:48</span>
            <div className="w-96 bg-neutral-700 rounded-full h-1">
              <div className="w-32 h-1 bg-neutral-200 rounded-full"></div>
            </div>
            <span className="text-xs text-neutral-400">2:04</span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 flex-1">
          <a href="#" className="text-neutral-400">
            <TbMicrophone2 size={20} />
          </a>
          <a href="#" className="text-neutral-400">
            <BsColumns size={20} />
          </a>
          <a href="#" className="text-neutral-400">
            <TbDevices2 size={20} />
          </a>
          <div className="flex items-center gap-4 text-neutral-400 group">
            <AiOutlineSound size={20} />
            <div className="w-24 bg-neutral-700 rounded-full h-1">
              <div className="w-12 h-1 bg-neutral-200 group-hover:bg-green-400 rounded-full relative">
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white invisible group-hover:visible"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
