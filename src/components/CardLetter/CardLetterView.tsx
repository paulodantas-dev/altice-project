import {
  PhoneCall,
  GlobeSimple,
  Globe,
  House,
  TreeEvergreen,
  ChatDots,
  Buildings,
} from 'phosphor-react';

import { Modal } from 'components/Modal/Modal';

import { WEBSITE } from 'config/constant';

import { ICardLetterView } from './ICardLetter';

export const CardLetterView = ({
  letter,
  onModalVisible,
  isModalVisible,
}: ICardLetterView): JSX.Element => {
  return (
    <>
      <div className="flex w-[560px] gap-2 h-56 rounded-lg overflow-hidden shadow-lg">
        <header className="bg-indigo-900 text-slate-100 p-4 flex flex-col justify-between max-w-[200px]">
          <h2 className="font-light text-xs">{letter.username}</h2>
          <h1 className="text-center uppercase">{letter.name}</h1>
          <div className="flex flex-col">
            <ul className="text-xs">
              <li className="flex items-center gap-2">
                <Buildings />
                {letter.address.city}
              </li>
              <li className="flex items-center gap-2">
                <TreeEvergreen />
                {letter.address.street}
              </li>
              <li className="flex items-center gap-2">
                <House />
                {letter.address.suite}
              </li>
              <li className="flex items-center gap-2">
                <ChatDots />
                {letter.address.zipcode}
              </li>
            </ul>
            <div className="flex items-center justify-between">
              <p className="text-xs flex items-center gap-2">
                <Globe />
                {letter.address.geo.lat}
              </p>
              <p className="text-xs flex items-center gap-2">
                <Globe />
                {letter.address.geo.lng}
              </p>
            </div>
          </div>
          <span className="font-bold text-xs">{letter.email}</span>
        </header>
        <div className="flex flex-col flex-1 ml-4">
          <main className="grow flex flex-col">
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <PhoneCall className="text-indigo-900" />
                <p className="text-xs font-light text-slate-500">{letter.phone}</p>
              </div>
              <div className="flex items-center gap-2">
                <GlobeSimple className="text-indigo-900" />
                <a
                  href={WEBSITE}
                  target="blank"
                  className="text-xs font-light text-slate-500 cursor-pointer hover:underline"
                >
                  {letter.website}
                </a>
              </div>
            </div>
            <div className="flex-1 mt-4 flex flex-col justify-evenly">
              <p className="font-light text-xs">{letter.company.bs}</p>
              <span className=" lowercase text-4xl break-words text-indigo-900">
                {letter.company.name}
              </span>
              <p className="font-bold text-xs text-indigo-500">{letter.company.catchPhrase}</p>
            </div>
          </main>
          <footer className="flex justify-end p-4">
            <button
              onClick={onModalVisible}
              className="bg-indigo-500 uppercase text-slate-100 rounded-full px-4 py-2 hover:bg-indigo-900"
            >
              See posts
            </button>
          </footer>
        </div>
      </div>
      {isModalVisible && <Modal onModalVisible={onModalVisible} posts={letter.posts} />}
    </>
  );
};
