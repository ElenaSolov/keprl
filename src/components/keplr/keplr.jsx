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

console.log(secretjs);

const getBalanse = async () => {
const {
  balance: { amount },
} = await secretjs.query.bank.balance(
  {
    address: "secret1ap26qrlp8mcq2pg6r47w43l0y8zkqm8a450s03",
    denom: "uscrt",
  } ,
);
return amount;
}


console.log(`I have ${getBalanse() / 1e6} SCRT!`);
useEffect(()=> {
window.keplr.getKey(chainId).then(response => {
           setKeplrUser(response.name);
           console.log(response)
       })
}, []);



    return (
        <div>Добрый день, {keplrUser}</div>
    );
}

export default Keplr;