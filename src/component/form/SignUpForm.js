import React,{useState} from 'react';
import "./form.css";


function SignUpForm () {
  const [users, setUser] = useState({
    email: "",
    password: "",
    country: "",
    gender: "male",
    other: ""
  })
  const [list, setList] = useState([])
  let Id= 0;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser({
      ...users,
      [name]: value
    })
  }

  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log('handleSubmit', e);
    const user = { ...users, id: Id += 1 };
    let arr = [];
    arr=list;
    arr.push(user)
    setList(arr);
    console.log(list);
    // forceUpdate;
  }

  return (
    <div class="container">
      <h1>Register</h1>
      <form class="form-wrap"  onSubmit={handleSubmit}>
          <div class="form-group">
              <label>Email Address</label>
              <input type="text" name="email" onChange={handleChange} class="form-control" />
          </div>
          <div class="form-group">
              <label>Password</label>
              <input type="password" name="password" onChange={handleChange} class="form-control" />
          </div>
          <div class="form-group">
            <label>Your country</label>
            <select name="country" value={users.country} onChange={handleChange}>
                <option value="">Please choose</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
            </select>
          </div>
          <div class="">
              <label>Gender</label>
              <div>
                <input type="radio" value="Male" checked={users.gender === "male"} name="gender" onChange={handleChange} /> Male
                <input type="radio" value="Female" checked={users.gender === "female"} name="gender" onChange={handleChange} /> Female
              </div>
          </div>
          <div class="form-group">
              <label>Other information</label>
              <input type='field' name="other" onChange={handleChange} />
          </div>
          <button type="submit" value="submit" class="btn btn-primary btn-block">Submit</button>
        </form>
        <div>
          <h2>Show register data</h2>
          <table class="table">
            <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Password</th> 
              <th>Country</th>
              <th>Gender</th>
              <th>Other</th> 
            </tr>
            </thead>
            <tbody>
            {list.map(row => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.email}</td>
                <td>{row.password}</td>
                <td>{row.country}</td>
                <td>{row.gender}</td>
                <td>{row.other}</td>
              </tr>
            ))} 
            </tbody>
          </table>
        </div>
    </div>
  );
}
export default SignUpForm;
