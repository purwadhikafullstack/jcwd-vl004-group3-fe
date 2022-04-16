export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const productColums = [{}];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

export const productRows = [
  {
    name: "Chitato",
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//113/MTA-17978558/chitato_chitato-keripik-kentang-sapi-panggang-120g_full01.jpg",
    category: "Makanan Ringan",
    buy_price: 15000,
    sell_price: 16000,
    warehouse: [
      { warehouseName: "Malang", stock: 9 },
      { warehouseName: "Surabaya", stock: 8 },
      { warehouseName: "Jakarta", stock: 10 },
      { warehouseName: "Bali", stock: 6 },
    ],
  },
  {
    name: "Fanta",
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-26423347/fanta_fanta-str-pet-1500-ml_full01.jpg",
    category: "Minuman Bersoda",
    buy_price: 10000,
    sell_price: 11000,
    warehouse: [
      { warehouseName: "Malang", stock: 4 },
      { warehouseName: "Surabaya", stock: 5 },
      { warehouseName: "Jakarta", stock: 8 },
      { warehouseName: "Bali", stock: 5 },
    ],
  },
  {
    name: "M&M",
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-26339442/no-brand_m-m-s-chocolate-candies-milk-200g_full01.jpg",
    category: "Permen",
    buy_price: 90000,
    sell_price: 100000,
    warehouse: [
      { warehouseName: "Malang", stock: 8 },
      { warehouseName: "Surabaya", stock: 2 },
      { warehouseName: "Jakarta", stock: 5 },
      { warehouseName: "Bali", stock: 7 },
    ],
  },
  {
    name: "Ketumbar Bubuk",
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//84/MTA-3021508/koepoe-koepoe_koepoe-koepoe-ketumbar-bubuk-25-gr_full02.jpg",
    category: "Bumbu Masak",
    buy_price: 2000,
    sell_price: 3000,
    warehouse: [
      { warehouseName: "Malang", stock: 9 },
      { warehouseName: "Surabaya", stock: 8 },
      { warehouseName: "Jakarta", stock: 10 },
      { warehouseName: "Bali", stock: 6 },
    ],
  },
  {
    name: "Bango Kecap Manis ",
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//111/MTA-16729878/bango_bango_kecap_manis_pouch_550ml_-_kecap_manis_refill-_soy_sauce-_kecap_manis_botol_full02_nbkzxy15.jpg",
    category: "Bumbu Dapur",
    buy_price: 24000,
    sell_price: 25000,
    warehouse: [
      { warehouseName: "Malang", stock: 9 },
      { warehouseName: "Surabaya", stock: 8 },
      { warehouseName: "Jakarta", stock: 10 },
      { warehouseName: "Bali", stock: 6 },
    ],
  },
  {
    name: "Gulaku",
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-3719201/gulaku_semarang---gulaku-premium--1-kg-_full04.jpg",
    category: "Bumbu Dapur",
    buy_price: 15000,
    sell_price: 16000,
    warehouse: [
      { warehouseName: "Malang", stock: 9 },
      { warehouseName: "Surabaya", stock: 8 },
      { warehouseName: "Jakarta", stock: 10 },
      { warehouseName: "Bali", stock: 6 },
    ],
  },
  {
    name: "Oreo",
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-3719201/gulaku_semarang---gulaku-premium--1-kg-_full04.jpg",
    category: "Makanan Ringan",
    buy_price: 8000,
    sell_price: 9000,
    warehouse: [
      { warehouseName: "Malang", stock: 9 },
      { warehouseName: "Surabaya", stock: 8 },
      { warehouseName: "Jakarta", stock: 10 },
      { warehouseName: "Bali", stock: 6 },
    ],
  },
  {
    name: "Pringles",
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/UK-0041912/pringles_pringles_original_-107_g-_pe11007_full11_ngf9exi7.jpeg",
    category: "Makanan Ringan",
    buy_price: 2000,
    sell_price: 3000,
    warehouse: [
      { warehouseName: "Malang", stock: 9 },
      { warehouseName: "Surabaya", stock: 8 },
      { warehouseName: "Jakarta", stock: 10 },
      { warehouseName: "Bali", stock: 6 },
    ],
  },
  {
    name: "Ketumbar Bubuk",
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//84/MTA-3021508/koepoe-koepoe_koepoe-koepoe-ketumbar-bubuk-25-gr_full02.jpg",
    category: "Bumbu Dapur",
    buy_price: 2000,
    sell_price: 3000,
    warehouse: [
      { warehouseName: "Malang", stock: 9 },
      { warehouseName: "Surabaya", stock: 8 },
      { warehouseName: "Jakarta", stock: 10 },
      { warehouseName: "Bali", stock: 6 },
    ],
  },
  {
    name: "Ketumbar Bubuk",
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//84/MTA-3021508/koepoe-koepoe_koepoe-koepoe-ketumbar-bubuk-25-gr_full02.jpg",
    category: "Bumbu Dapur",
    buy_price: 2000,
    sell_price: 3000,
    warehouse: [
      { warehouseName: "Malang", stock: 9 },
      { warehouseName: "Surabaya", stock: 8 },
      { warehouseName: "Jakarta", stock: 10 },
      { warehouseName: "Bali", stock: 6 },
    ],
  },
  {
    name: "Ketumbar Bubuk",
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//84/MTA-3021508/koepoe-koepoe_koepoe-koepoe-ketumbar-bubuk-25-gr_full02.jpg",
    category: "Bumbu Dapur",
    buy_price: 2000,
    sell_price: 3000,
    warehouse: [
      { warehouseName: "Malang", stock: 9 },
      { warehouseName: "Surabaya", stock: 8 },
      { warehouseName: "Jakarta", stock: 10 },
      { warehouseName: "Bali", stock: 6 },
    ],
  },
];
