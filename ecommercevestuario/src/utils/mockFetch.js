export const products = [
  {
    id: 1,
    Nombre: "bikini 1",
    Precio: 20000,
    categoria: "mareas",
    stock: 10,
    Descripcion:
      "Traje de baño como, tela suave ideal para disfrutar el verano",
    imagenURL:
      "https://billabongcl.vtexassets.com/arquivos/ids/186381-800-auto?v=638024078225430000&width=800&height=auto&aspect=true",
  },
  {
    id: 2,
    Nombre: "bikini 2",
    Precio: 20000,
    categoria: "mareas",
    stock: 10,
    Descripcion:
      "Traje de baño como, tela suave ideal para disfrutar el verano",
    imagenURL:
      "https://m.media-amazon.com/images/I/71IvfHlLwGL._AC_UY1000_.jpg",
  },
  {
    id: 3,
    Nombre: "bikini 3",
    Precio: 20000,
    categoria: "florecer",
    stock: 10,
    Descripcion:
      "Traje de baño como, tela suave ideal para disfrutar el verano",
    imagenURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOYhZUGzRaJtVmtMdk9ibo1-u4BX5swQ9lQ&usqp=CAU",
  },
  {
    id: 4,
    Nombre: "bikini 4",
    Precio: 20000,
    categoria: "florecer",
    stock: 10,
    Descripcion:
      "Traje de baño como, tela suave ideal para disfrutar el verano",
    imagenURL:
      "https://images.hola.com/imagenes/moda/modelos/20220705213096/dia-mundial-bikini-gigi-hadid-alessandra-ambrosio/1-110-491/devonlook1-m.jpg?tx=w_680",
  },
  {
    id: 5,
    Nombre: "bikini 5",
    Precio: 20000,
    categoria: "malibu",
    stock: 10,
    Descripcion:
      "Traje de baño como, tela suave ideal para disfrutar el verano",
    imagenURL:
      "https://lh5.googleusercontent.com/p/AF1QipMPZWKCTJx79bvj0dIzXKaWC4xOO4YCfVcLgDla",
  },
];
export const mFetch = (pid) =>
  new Promise((res, rej) => {
    /* const condition = true; */
    setTimeout(() => {
      res(pid ? products.find((product) => product.id === pid) : products);
    }, 2000);
  });
