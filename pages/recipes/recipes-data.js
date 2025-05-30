// pages/recipes/recipes-data.js
const recipes = [
  {
    id: "pho-bo",
    title: "Phở Bò Nam Định",
    author: "Đầu Bếp Việt",
    date: "15/03/2024",
    time: "45 phút",
    difficulty: "Trung bình",
    calories: "520 kcal",
    rating: 4.8,
    ratingCount: 156,
    image: "/assets/images/dishes/phobo.jpg",
    ingredients: [
      "Xương bò - 1kg",
      "Thịt bò phi lê - 500g",
      "Bánh phở - 1kg",
      "Hành tây - 2 củ",
      "Gừng - 100g",
      "Hoa hồi - 3 cái",
      "Quế - 2 cây",
      "Hành lá, ngò - 100g",
      "Giá đỗ - 200g",
      "Gia vị: muối, đường, nước mắm"
    ],
    steps: [
      {
        title: "Chuẩn bị nước dùng",
        desc: "Xương bò rửa sạch, chần qua nước sôi. Sau đó cho vào nồi nước lạnh, thêm hành tây, gừng đã nướng thơm. Nấu với lửa nhỏ trong 6-8 tiếng."
      },
      {
        title: "Ướp và thái thịt",
        desc: "Thịt bò phi lê thái mỏng, ướp với chút muối, tiêu. Để trong tủ lạnh ít nhất 30 phút."
      },
      {
        title: "Nêm nếm nước dùng",
        desc: "Cho hoa hồi, quế vào nước dùng. Nêm nếm với muối, đường, nước mắm vừa ăn. Nước dùng phải trong và ngọt thanh."
      },
      {
        title: "Trình bày và thưởng thức",
        desc: "Trụng bánh phở, xếp thịt bò, chan nước dùng sôi. Dùng kèm với giá đỗ, hành lá, ngò, chanh, ớt."
      }
    ],
    comments: [
      {
        user: "Nguyễn Văn A",
        avatar: "/assets/images/users/user-1.jpg",
        rating: 5,
        text: "Công thức rất chi tiết và dễ làm theo. Nước dùng ngọt, thơm đúng vị phở Nam Định. Cảm ơn tác giả!"
      }
      // ... thêm bình luận khác
    ],
    related: [
      {
        id: "bun-bo",
        title: "Bún bò Huế",
        image: "/assets/images/dishes/bunbo.jpg",
        description: "Món bún bò Huế đậm đà, cay nồng với nước dùng từ xương bò và các gia vị đặc trưng.",
        time: "60 phút",
        rating: 4.7
      },
      // ... thêm món liên quan
    ]
  },
  
  // ... các công thức khác
];