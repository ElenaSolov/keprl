import React, { useEffect, useState } from 'react';
import { SecretNetworkClient } from "secretjs";

const Keplr = () => {
   const grpcWebUrl = "https://wgrpc.secret.express"; // should be moved to .env
   const chainId = "secret-4";

   const [keplrUser, setKeplrUser] = useState("");


   // Readonly Client
   const secretjs = SecretNetworkClient.create({
     grpcWebUrl,
     chainId,
   });

   // Or a signer client with Keplr integration
   window.keplr.enable(chainId)


   window.keplr.getKey(chainId).then(response => {
           setKeplrUser(response.name);
       })


    return (
        <div>Добрый день, {keplrUser}</div>
    );
}

export default Keplr;