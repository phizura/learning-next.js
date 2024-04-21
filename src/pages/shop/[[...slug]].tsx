import { Console, log } from "console";
import { useRouter } from "next/router";

const ShopPage = () => {
    const { query } = useRouter();
    console.log(query);
    
    return(
        <div>
            <h1>Detail Product</h1>
            <p>Product : { `${query.slug && query.slug[0] +"-"+ query.slug[1]}`}</p>
        </div>
    );
};

export default ShopPage