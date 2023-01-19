import React, { useEffect, useState } from 'react';
import { SecretNetworkClient } from "secretjs";

const Keplr = () => {
   const grpcWebUrl = "https://wgrpc.secret.express"; // should be moved to .env
   const chainId = "secret-4";

   const [keplrUser, setKeplrUser] = useState("");

    // To create a readonly secret.js client, just pass in a gRPC-web endpoint
    const secretjs = new SecretNetworkClient({
      grpcWebUrl,
      chainId,
    });

    useEffect(()=> {
    window.keplr.getKey(chainId).then(response => {
               setKeplrUser(response);
               console.log(response)
           });
    }, []);

    return (
        <div>Добрый день, {keplrUser.name}</div>
    );
}

export default Keplr;