import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "2020",
      title: "HTML/CSS Верстальник",
      company: "Freelance",
      type: "Фриланс",
      description:
        "Почав з адаптивної верстки лендінгів та простих сайтів за макетами. Піксель-перфект, коректне відображення на мобільних пристроях та базова оптимізація швидкості.",
    },
    {
      year: "2021–2022",
      title: "Front-end / WordPress розробник",
      company: "Freelance платформи",
      type: "Віддалено",
      description:
        "Підключення тем і плагінів, створення кастомних блоків, налаштування форми заявок, інтеграції зі сторонніми сервісами. Робота з реальними бізнес-проєктами.",
    },
    {
      year: "2023",
      title: "Розробка сайтів під ключ",
      company: "Малі та середні бізнеси",
      type: "Fulltime / Фриланс",
      description:
        "Повний цикл: від структури та дизайну до верстки, програмування й розміщення на хостингу. Корпоративні сайти, лендінги та міні інтернет-магазини.",
    },
    {
      year: "2024+",
      title: "WordPress / Front-end розробник",
      company: "Власні клієнти та агенції",
      type: "Віддалено",
      description:
        "Створення швидких, адаптивних та SEO-оптимізованих сайтів. Кастомні рішення на WordPress, інтеграції, підвищення конверсії та підтримка існуючих проєктів.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Досвід</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                {/* Left: year + title */}
                <div>
                  <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                {/* Middle: timeline + company */}
                <div className="relative">
                  {index < experiences.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${
                        index < experiences.length - 1 ? "h-40" : "h-30"
                      } bg-softGray`}
                    ></div>
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${
                        index === 1 ? "border-primary" : "border-black"
                      }`}
                    >
                      {index === 1 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-black font-normal">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>
                </div>

                {/* Right: description */}
                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
