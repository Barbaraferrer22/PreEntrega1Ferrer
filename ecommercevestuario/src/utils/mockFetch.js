export const products = [
  {
    id: 1,
    Nombre: "bikini 1",
    Precio: 20000,
    categoria: "mareas",
    stock: 10,
    Descripcion:
      "Traje de baño como, tela suave ideal para disfrutar el verano",
    imagenURL: "/imagenes/bikini_girasol.jpeg",
  },
  {
    id: 2,
    Nombre: "bikini 2",
    Precio: 20000,
    categoria: "mareas",
    stock: 10,
    Descripcion:
      "Traje de baño como, tela suave ideal para disfrutar el verano",
    imagenURL: "/imagenes/bikini2_verde.jpeg",
  },
  {
    id: 3,
    Nombre: "bikini 3",
    Precio: 20000,
    categoria: "florecer",
    stock: 10,
    Descripcion:
      "Traje de baño como, tela suave ideal para disfrutar el verano",
    imagenURL: "/imagenes/Bikiniamarillo.jpeg",
  },
  {
    id: 4,
    Nombre: "bikini 4",
    Precio: 20000,
    categoria: "florecer",
    stock: 10,
    Descripcion:
      "Traje de baño como, tela suave ideal para disfrutar el verano",
    imagenURL: "/imagenes/completo_rojo.jpeg",
  },
  {
    id: 5,
    Nombre: "bikini 5",
    Precio: 20000,
    categoria: "malibu",
    stock: 10,
    Descripcion:
      "Traje de baño como, tela suave ideal para disfrutar el verano",
    imagenURL: "/imagenes/Bikini1.jpeg",
  },
  {
    id: 6,
    Nombre: "bikini 6",
    Precio: 20000,
    categoria: "malibu",
    stock: 10,
    Descripcion:
      "Traje de baño como, tela suave ideal para disfrutar el verano",
    imagenURL: "/imagenes/trajedebañoceleste.jpeg",
  },
  {
    id: 7,
    Nombre: "bikini 7",
    Precio: 20000,
    categoria: "malibu",
    stock: 10,
    Descripcion:
      "Traje de baño como, tela suave ideal para disfrutar el verano",
    imagenURL: "/imagenes/43F0CFAB-1D12-4CB9-A1E0-AE91D74913B5.jpeg",
  },
];
export const mFetch = (pid) =>
  new Promise((res, rej) => {
    /* const condition = true; */
    setTimeout(() => {
      res(pid ? products.find((product) => product.id === pid) : products);
    }, 2000);
  });
