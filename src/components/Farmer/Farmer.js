import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Farmer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Dharwad',
      islogout: false,
    };
  }

  handleChange = (event) => this.setState({ value: event.target.value });

  signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('session');
    this.setState({
      islogout: true,
    });
  };

  render() {
    if (this.state.islogout) {
      return <Redirect to="/Login" />;
    }

    return (
      <div id="content">
        <button onClick={this.signOut} href="#">
          Sign Out
        </button>
        <h1>Add Product</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            // const id = localStorage.getItem('token');  
            const id=1;
            const name = this.productName.value;
            const city = this.state.value;
            const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether');
            if (id && name && price && city) {
              this.props.createProduct(id, name, price, city);
            } else {
              console.error('One or more parameters are null or undefined.');
              console.log(id)
              console.log(name)
              console.log(city)
              console.log(price)
            }
            
          }}
        >
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              ref={(input) => {
                this.productName = input;
              }}
              className="form-control"
              placeholder="Product Name"
              required
            />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              ref={(input) => {
                this.productPrice = input;
              }}
              className="form-control"
              placeholder="Product Price"
              required
            />
          </div>
          <form>
            <label>Select City: </label>
            <select value={this.state.value1} onChange={this.handleChange}>
              <option value="Dharwad">Dharwad</option>
              <option value="Haliyal">Haliyal</option>
              <option value="Dandeli">Dandeli</option>
            </select>
          </form>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
        <p>&nbsp;</p>
        <h2>Product List</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product ID</th>
              <th scope="col">Farmer ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>
              <th scope="col">City</th>
              <th scope="col">Is this sold</th>
              <th scope="col">Quality approved</th>
            </tr>
          </thead>
          <tbody id="productList">
            {this.props.products.map((product, key) => (
              <tr key={key}>
                <th scope="row">{product.id.toString()}</th>
                <th scope="rowe">{product.farmerID.toString()}</th>
                <td>{product.name}</td>
                <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                <td>{product.owner}</td>
                <td>{product.city}</td>
                <td>{product.purchased.toString()}</td>
                <td>{product.approved.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Farmer;
