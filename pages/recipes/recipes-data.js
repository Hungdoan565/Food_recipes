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
      {
        "user": "Lê Thị B",
        "avatar": "/assets/images/users/user-2.jpg",
        "rating": 4,
        "text": "Mình làm thử và cả nhà đều khen ngon, nước dùng trong và thơm!"
      }
    ],
  },
  {
  id: "banh-mi",
  title: "Bánh Mì Việt Nam",
  author: "Cô Lan",
  date: "10/04/2024",
  time: "30 phút",
  difficulty: "Dễ",
  calories: "350 kcal",
  rating: 4.9,
  ratingCount: 210,
  image: "/assets/images/dishes/banhmi.jpg",
  ingredients: [
    "Bánh mì - 2 ổ",
    "Thịt nguội - 100g",
    "Chả lụa - 100g",
    "Dưa leo - 1 quả",
    "Rau thơm, ngò",
    "Nước tương, pate, bơ, ớt"
  ],
  steps: [
    { title: "Chuẩn bị nguyên liệu", desc: "Sơ chế dưa leo, rau thơm, cắt chả lụa, thịt nguội." },
    { title: "Làm nhân", desc: "Phết pate, bơ vào bánh mì, xếp thịt nguội, chả lụa, dưa leo, rau thơm." },
    { title: "Hoàn thiện", desc: "Rưới nước tương, thêm ớt nếu thích. Thưởng thức khi còn nóng." }
  ],
  comments: [
    { user: "Trần Văn B", avatar: "/assets/images/users/user-2.jpg", rating: 5, text: "Bánh mì ngon, dễ làm, chuẩn vị Việt!" }
  ],
  related: [
    { id: "pho-bo", title: "Phở Bò Nam Định", image: "/assets/images/dishes/phobo.jpg", time: "45 phút", rating: 4.8 }
  ]
},
{
  id: "com-tam",
  title: "Cơm Tấm Sài Gòn",
  author: "Đầu Bếp Việt",
  date: "20/04/2024",
  time: "50 phút",
  difficulty: "Trung bình",
  calories: "600 kcal",
  rating: 4.7,
  ratingCount: 180,
  image: "/assets/images/recipes/comtam.jpg",
  ingredients: [
    "Gạo tấm - 500g",
    "Sườn heo - 300g",
    "Bì - 100g",
    "Chả trứng - 2 miếng",
    "Mỡ hành, nước mắm, đồ chua"
  ],
  steps: [
    { title: "Nấu cơm tấm", desc: "Vo sạch gạo tấm, nấu chín." },
    { title: "Nướng sườn", desc: "Ướp sườn với gia vị, nướng chín vàng." },
    { title: "Làm chả trứng", desc: "Đánh trứng với thịt, hấp chín." },
    { title: "Trình bày", desc: "Xới cơm ra đĩa, xếp sườn, bì, chả, chan mỡ hành, nước mắm, ăn kèm đồ chua." }
  ],
  comments: [
    { user: "Lê Thị C", avatar: "/assets/images/users/user-3.jpg", rating: 5, text: "Cơm tấm ngon, nước mắm tuyệt vời!" }
  ],
  related: [
    { id: "bun-bo", title: "Bún bò Huế", image: "/assets/images/dishes/bunbo.jpg", time: "60 phút", rating: 4.7 }
  ]
}
  // ... các công thức khác
];