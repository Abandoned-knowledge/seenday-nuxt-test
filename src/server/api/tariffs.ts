export default defineEventHandler(() => {
  return [
    {
      preferred: false,
      name: "1 ТБ",
      benefits: [
        "Загружайте любые фотографии: .JPG, .PNG, .WEBP и др.",
        "Храните исходники фотографий: .DNG, .PSD и др.",
        "Доступ к файлам 24/7 ",
      ],
      pricePerMonth: {
        perMonth: 399,
        perYear: {
          value: 299,
          saving: 1200,
        },
      },
    },

    {
      preferred: true,
      name: "3 ТБ",
      benefits: [
        "Загружайте любые фотографии: .JPG, .PNG, .WEBP и др.",
        "Храните исходники фотографий: .DNG, .PSD и др.",
        "Доступ к файлам 24/7 ",
      ],
      pricePerMonth: {
        perMonth: 1197,
        perYear: {
          value: 889,
          saving: 3696,
        },
      },
    },

    {
      preferred: false,
      name: "8 ТБ",
      benefits: [
        "Загружайте любые фотографии: .JPG, .PNG, .WEBP и др.",
        "Храните исходники фотографий: .DNG, .PSD и др.",
        "Доступ к файлам 24/7 ",
      ],
      pricePerMonth: {
        perMonth: 3192,
        perYear: {
          value: 2292,
          saving: 10800,
        },
      },
    },
  ];
});
