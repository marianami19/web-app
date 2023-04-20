
function AddSales() {
  return (
    <div className='container'>
      <h3 className="text-center mt-2">Add Sales</h3>
      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="validationCustom01" required />
        </div>

        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">Quantity</label>
          <input type="number" min="0" className="form-control" id="validationCustom05" required />
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">Amount</label>
          <input type="number" step="any" className="form-control" id="validationCustom05" required />
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddSales;
