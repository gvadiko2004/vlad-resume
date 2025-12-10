"use client";

import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch work data");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching work data:", error);
      }
    };

    fetchData();
  }, []);

  // Проверка: внешняя ли ссылка
  const isExternal = (url: string) => /^https?:\/\//.test(url || "");

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32">
            {/* Заголовок секції */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Останні роботи</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </div>

            {/* Список робіт */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workData?.map((value: any, index: number) => {
                const imageSrc = value?.image?.startsWith("http")
                  ? value.image
                  : getImgPath(value.image);

                return (
                  <div
                    key={index}
                    className="group flex flex-col gap-3 xl:gap-6"
                  >
                    {/* Картинка + hover-оверлей (структура как в исходнике, чтобы не ломать ховер) */}
                    <div className="relative">
                      <Image
                        src={imageSrc}
                        alt={value?.title || "work-image"}
                        width={570}
                        height={414}
                        className="rounded-lg w-full h-full object-cover object-top overflow-hidden max-h-[500px]"
                      />

                      {value?.slug && (
                        isExternal(value.slug) ? (
                          <a
                            href={value.slug}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-0 left-0 backdrop-blur-xs bg-primary/15 w-full h-full hidden group-hover:flex rounded-lg"
                          >
                            <span className="flex justify-center items-center p-5 w-full">
                              <svg
                                width="65"
                                height="64"
                                viewBox="0 0 65 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.333374"
                                  width="64"
                                  height="64"
                                  rx="32"
                                  fill="#FE4300"
                                />
                                <path
                                  d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                                  stroke="#FFFF"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </a>
                        ) : (
                          <Link
                            href={value.slug}
                            className="absolute top-0 left-0 backdrop-blur-xs bg-primary/15 w-full h-full hidden group-hover:flex rounded-lg"
                          >
                            <span className="flex justify-center items-center p-5 w-full">
                              <svg
                                width="65"
                                height="64"
                                viewBox="0 0 65 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.333374"
                                  width="64"
                                  height="64"
                                  rx="32"
                                  fill="#FE4300"
                                />
                                <path
                                  d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                                  stroke="#FFFF"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </Link>
                        )
                      )}
                    </div>

                    {/* Текстова частина */}
                    <div className="flex flex-col gap-0 xl:gap-2">
                      <div className="flex items-center justify-between">
                        {value?.slug ? (
                          isExternal(value.slug) ? (
                            <a
                              href={value.slug}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <h5>{value?.title}</h5>
                            </a>
                          ) : (
                            <Link href={value.slug}>
                              <h5>{value?.title}</h5>
                            </Link>
                          )
                        ) : (
                          <h5>{value?.title}</h5>
                        )}

                        <Image
                          src={getImgPath("/images/icon/right-arrow-icon.svg")}
                          alt="right-arrow-icon"
                          width={30}
                          height={30}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
