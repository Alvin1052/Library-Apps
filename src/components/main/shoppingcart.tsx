import { ShoppingBasketIcon } from 'lucide-react';

const ShoppingCart = () => {
  // const { data, isLoading } = useQuery({
  //   queryKey: ['cart'],
  //   queryFn: async () => await getCart().then((res) => res.data),
  // });

  // console.log('shopping cart', data);

  return (
    <div>
      {/* {isLoading && <div> Loading......</div>} */}

      <ShoppingBasketIcon size={32} />
    </div>
  );
};

export default ShoppingCart;
