import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { mFetch } from "../../utils/mockFetch";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const Loading = () => {
  return (
    <>
      <h2>Cargando...👙</h2>
    </>
  );
};

const ItemListContainer = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    if (cid) {
      mFetch();
      const db = getFirestore();
      const queryCollection = collection(db, "productos");
      const queryFilter = query(queryCollection, where("categoria", "==", cid));
      getDocs(queryFilter)
        .then((resp) =>
          setProduct(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      const db = getFirestore();
      const queryCollection = collection(db, "productos");
      getDocs(queryCollection)
        .then((resp) =>
          setProduct(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [cid]);

  return (
    <main className="row g-4 my-5">
      {loading ? <Loading /> : <ItemList products={products} />}
    </main>
  );
};

export default ItemListContainer;
