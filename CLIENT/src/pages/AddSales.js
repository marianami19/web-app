
import { useState } from 'react';

function AddSales() {
  const [prodName, setprodName] = useState("");
  const [prodQty, setprodQty] = useState("");
  const [prodAmt, setprodAmt] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${prodName} ${prodQty}  ${prodAmt}`)
  }
  return (
    <div className='container'>
      <h3 className="text-center mt-2">Add Sales</h3>
      <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="prodName" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="prodName" required   value={prodName}
          onChange={(e) => setprodName(e.target.value)}/>
        </div>

        <div className="col-md-3">
          <label htmlFor="prodQty" className="form-label">Quantity</label>
          <input type="number" min="0" className="form-control" id="prodQty" value={prodQty}
          onChange={(e) => setprodQty(e.target.value)} required />
        </div>
        <div className="col-md-3">
          <label htmlFor="prodAmt" className="form-label">Amount</label>
          <input type="number" step="any" className="form-control" id="prodAmt"  value={prodAmt}
          onChange={(e) => setprodAmt(e.target.value)}  required />
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddSales;
