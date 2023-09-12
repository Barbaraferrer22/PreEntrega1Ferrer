import React, { useEffect, useState } from "react";
import { mFetch } from "../../utils/mockFetch";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();
  console.log(cid);

  useEffect(() => {
    if (cid) {
      mFetch()
        .then((respuesta) =>
          setProduct(respuesta.filter((product) => cid === product.categoria))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      mFetch()
        .then((respuesta) => setProduct(respuesta))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [cid]);

  return (
    <main className="row g-4 my-5">
      {loading ? <h2>Cargando...👙</h2> : <ItemList products={products} />}
    </main>
  );
};

export default ItemListContainer;
