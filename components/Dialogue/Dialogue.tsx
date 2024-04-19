import React from 'react';
import { IDialogue } from './types';
import PlusIcon from '@/public/icons/plus.svg';
import MinusIcon from '@/public/icons/minus.svg';

type DialogueProps = {
  text: IDialogue;
  activeDialogue: boolean;
  handleDialogue: () => void;
};

export const Dialogue: React.FC<DialogueProps> = ({
  text,
  activeDialogue,
  handleDialogue,
}) => {
  const { question, answer } = text;
  return (
    <div
      className="w-full bg-bgSecond cursor-pointer p-6 rounded-lg"
      onClick={handleDialogue}
    >
      <div className="flex flex-row justify-between items-center ">
        <div className="w-[215px] md:w-[530px] xl:w-[773px]">
          <p className="text-[16px] leading-[1.3] font-medium  md:font-semibold font-geologica text-main md:text-[20px] md:leading-[1.2] xl:text-descriptionDesktop ">
            {question}
          </p>
        </div>
        {activeDialogue ? (
          <MinusIcon width={22} height={22} className="fill-current" />
        ) : (
          <PlusIcon width={22} height={22} className="fill-current" />
        )}
      </div>

      {activeDialogue && (
        <div className="w-[210px] md:w-[500px] xl:w-[750px]">
          <p className="text-subtitleXs text-description xl:text-subtitleMd mt-[10px] ">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};
