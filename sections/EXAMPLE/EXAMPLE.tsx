'use client';

// import Image from 'next/image';
// import { getProducts } from '@/sanity/requests/getProducts';
import React, { useState } from 'react';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Navbar } from '@/components/Navbar';
import { Modal } from '@/components/Modal/Modal';
import { Logo } from '@/components/Logo';

import { Button } from '@/components/Button';

import { SocialLinks } from '@/components/SocialLinks';
import { AdvantagesCard } from '@/components/AdvantagesCard';

import advantages from '@/data/advantages.json';

export const EXAMPLE = async () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  // const products = await getProducts();
  const { icons } = advantages;

  const openModal = () => {
    setIsOpenModal(true);
  };

  const CloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Section sectionId="hero" variant="heroSection">
      <Container>
        <Logo isHeader />

        <Navbar />
        <SectionTitle
          label="Section Title"
          center="center"
          variant="otherTitle"
        />
        <SectionTitle
          label="Section Title for contacts"
          center="left"
          variant="contactTitle"
        />
        {/* <div className="flex flex-row justify-center  gap-11">
          <Image
            width={344}
            height={420}
            alt={products[0].product}
            src={products[0].image}
            priority={true}
            placeholder="blur"
            blurDataURL={products[0].image}
          />
          <Image
            width={262}
            height={320}
            alt={products[1].product}
            src={products[1].image}
            priority={true}
            placeholder="blur"
            blurDataURL={products[1].image}
          />
        </div> */}
        <div className="flex flex-col gap-2 mt-5">
          <p> Лінк в хедері/ розміри тільки для десктопу</p>
          <Button isLink isHeaderLink isDisabled={false}>
            Залишити заявку
          </Button>
          <p> Лінк в секціях</p>
          <Button isLink isOrderLink isDisabled={false}>
            Замовити
          </Button>
          <p> Кнопка більше </p>
          <Button isLink={false} isBtn isDisabled={false} type="button">
            Більше
          </Button>
          <p> Кнопка сховати </p>
          <Button isLink={false} isBtn isDisabled={false} type="button">
            сховати
          </Button>
          <p> Кнопка сабміт </p>
          <Button isLink={false} isBtn isDisabled={false} type="submit">
            Замовити
          </Button>
          <p> Кнопка дісейблед</p>
          <Button isLink={false} isBtn isDisabled={true} type="submit">
            Замовити
          </Button>
        </div>
        <div className="bg-[#224722]">
          <SocialLinks />
        </div>
        <button onClick={openModal}>OPEN MODAL</button>
        {isOpenModal && (
          <Modal
            isOpen={isOpenModal}
            closeModal={CloseModal}
            ariaLabel="закрити"
            closeBtnStyles=""
            modalStyles={'w-[300px] h-[200px] bg-white'}
            isBurgerMenu={false}
            isPopUp={true}
          >
            <p>Modal</p>
          </Modal>
        )}
        <ul className="flex flex-col md:flex-row  md:mx-[2px] gap-[70px] md:gap-[82px] xl:gap-[124px]">
          {icons.map(icon => {
            return (
              <li key={icon.id} className="custom-width">
                <AdvantagesCard
                  description={icon.text}
                  icon={icon.component}
                  isMiddleCard={icon.isMiddleCard}
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};
