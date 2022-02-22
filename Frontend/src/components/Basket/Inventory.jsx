import React from "react";
import { Button } from "react-bootstrap";

const Inventory = ({
  products,
  totalPrice,
  onDeleteLastProduct,
  onDeleteProduct,
}) => {
  return (
    <div className="inventoryList">
      <ul class="list-group">
        {products.map((item, index) => (
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            <span>
              <span class="fw-bold">{item.name}</span>{" "}
              <span class="badge bg-primary rounded-pill">
                &euro; {item.price}
              </span>
            </span>

            {onDeleteProduct ? (
              <>
                {" "}
                <button
                  type="button"
                  class="btn btn-sm btn-outline-danger"
                  onClick={() => onDeleteProduct?.(item.id)}
                >
                  remove
                </button>
              </>
            ) : null}
          </li>
        ))}

        <li class="list-group-item list-group-item-success">
          Total Price: <strong>&euro; {totalPrice.toFixed(2)}</strong>
        </li>
      </ul>

      {onDeleteLastProduct ? (
        <>
          <br />
          <Button onClick={onDeleteLastProduct} variant="danger">
            Remove Last
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default Inventory;
