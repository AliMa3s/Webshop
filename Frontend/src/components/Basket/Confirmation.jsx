import Inventory from "./Inventory";

const Confirmation = ({ customerData, products, totalPrice }) => (
  <div className="BasketPage">
    <h1>Thank you for your order</h1>
    <h2>Your data</h2>
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          First name: <strong>{customerData.firstname}</strong>
        </div>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          Last name: <strong>{customerData.lastname}</strong>
        </div>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          Address:{" "}
          <strong>
            {customerData.street} {customerData.number},{" "}
            {customerData.postalCode} {customerData.city}
          </strong>
        </div>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          E-mail:{" "}
          <strong>
            <a href={`mailto:${customerData.email}`}>{customerData.email}</a>
          </strong>
        </div>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          Phone: <strong>{customerData.telephone}</strong>
        </div>
      </li>
    </ul>

    <br />

    <h2>Your order</h2>
    <Inventory products={products} totalPrice={totalPrice} />
  </div>
);

export default Confirmation;