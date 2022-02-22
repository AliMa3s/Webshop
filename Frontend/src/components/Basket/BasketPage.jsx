import React from "react";
import BasketForm from "./Form";
import Inventory from "./Inventory";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromInventory,
  removeItemFromInventory,
} from "../../store/Inventory/slice";
import Confirmation from "./Confirmation";

const BasketPage = () => {
  const inventoryState = useSelector((state) => state.inventory);
  const dispatch = useDispatch();
  const totalPrice = inventoryState.reduce(
    (accumulator, currentval) => accumulator + currentval.price,
    0
  );
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [customerData, setCustomerData] = React.useState({});

  const handleSubmit = (nextCustomerData) => {
    setCustomerData(nextCustomerData);
    setIsSubmit(true);
  };

  if (isSubmit) {
    return (
      <Confirmation
        products={inventoryState}
        customerData={customerData}
        totalPrice={totalPrice}
      />
    );
  }

  return (
    <div className="BasketPage">
      <h1>Inventory</h1>
      <Inventory
        products={inventoryState}
        onDeleteProduct={(productId) =>
          dispatch(removeItemFromInventory(productId))
        }
        onDeleteLastProduct={() => dispatch(removeFromInventory())}
        totalPrice={totalPrice}
      />

      <hr />

      <BasketForm onSubmit={handleSubmit} />
    </div>
  );
};

export default BasketPage;
