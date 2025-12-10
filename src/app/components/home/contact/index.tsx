"use client";

import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          {/* Заголовок секції */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Контакти</h2>
            <p className="text-xl text-orange-500">( 05 )</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Текстовий блок */}
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl md:text-3xl font-semibold">
                Хочете замовити сайт або обговорити проєкт?
              </h3>
              <p className="text-base md:text-lg text-secondary max-w-xl">
                Напишіть мені на Freelancehunt — там ви можете переглянути відгуки,
                деталі профілю та залишити заявку на розробку сайту під ключ.
              </p>

              <Link
                href="https://freelancehunt.com/freelancer/Vlari.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-fit mt-4 py-3.5 px-7 rounded-full border border-primary bg-primary text-white text-lg font-medium hover:bg-transparent hover:text-primary transition-colors duration-300"
              >
                Перейти на Freelancehunt
                <Image
                  src={getImgPath("/images/icon/right-arrow-icon.svg")}
                  alt="arrow"
                  width={22}
                  height={22}
                />
              </Link>
            </div>

            {/* Картинка / візуальний блок */}
            <div className="flex justify-center md:justify-end">
              <div className="relative p-6 md:p-8 rounded-3xl border border-softGray bg-softGray/60 max-w-md w-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <Image
                      src={getImgPath("/images/icon/web-icon.svg")}
                      alt="freelance-icon"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-secondary">Профіль на платформі</p>
                    <p className="text-lg font-semibold">
                      Freelancehunt — Vlad (WebiSen)
                    </p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-secondary mb-4">
                  Відповідаю на повідомлення переважно протягом дня. Опишіть коротко
                  задачу, бюджет та строки — і я запропоную оптимальний формат
                  співпраці.
                </p>
                <Link
                  href="https://freelancehunt.com/freelancer/Vlari.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-primary border-b border-primary w-fit hover:text-black hover:border-black transition-colors"
                >
                  Відкрити профіль Freelancehunt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
