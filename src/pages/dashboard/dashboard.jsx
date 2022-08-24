import React from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../firebase";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";

export default function Dashboard(props) {
  let history = useHistory();

  const [clients, setClients] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "clientsNumbers");
    //   snapshot automatically detects data changes within firestore
    // which means that we need to unsub it once the component is dismounted
    const unsub = onSnapshot(collectionRef, (snapshot) => {
      const clientsNumbers = snapshot.docs.map((doc) => doc.data());
      setClients(clientsNumbers);
    });
    return unsub;
  }, []);

  const handleRendering = () => {
    if (props.isInAuth === true) {
      return (
        <div className="container mt-3">
          <h1 className="h1" style={{ textAlign: "center" }}>
            Clients Numbers
          </h1>
          <ul class="list-group">
            {clients !== [] && clients.length !== 0
              ? clients.map((client, index) => (
                  <li key={index} class="list-group-item">
                    {client.number}
                  </li>
                ))
              : null}
          </ul>
          <button
            type="button"
            class="btn btn-primary mt-3"
            onClick={() => history.push("/")}
          >
            Home Page
          </button>
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  };
  return <>{handleRendering()}</>;
}
