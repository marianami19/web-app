
function Register() {
  return (
    <div className='container'>
      <h3 className="text-center mt-2">Registration</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="validationCustom01" className="form-label">First Name</label>
          <input type="text" className="form-control" id="validationCustom01" required />
        </div>
        <div className="mb-3">
          <label htmlFor="validationCustom02" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="validationCustom02" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Register;
