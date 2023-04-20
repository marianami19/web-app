
function TopFive() {
  return (
    <div className='container'>
      <h3 className="text-center mt-2">Top Five Sales</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sales ID:</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Sale Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>S1212</td>
            <td>Chilli</td>
            <td>2</td>
            <td>300</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>S1213</td>
            <td>Garlic</td>
            <td>5</td>
            <td>22.33</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TopFive;
