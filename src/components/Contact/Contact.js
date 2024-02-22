import React, { Component } from 'react';
import './contact.css';
import axios from 'axios';


export default class Contact extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      phone:'',
      msg:''
    }
  }



  saveData=(event)=>{
    event.preventDefault();
    console.log(this.state);

    axios.post("http://localhost:3004/contact",this.state)
    .then((res)=>{
      console.log(res);
    })
    .then((err)=>{
      console.log(err);
    })
  }

  setName=(event)=>{
    this.setState({name:event.target.value});
  }

  setEmail=(event)=>{
    this.setState({email:event.target.value});
  }

  setPhone=(event)=>{
    this.setState({phone:event.target.value});
  }

  render() {
    return (
      <>
      <div id="contact">
        <div className="container">
          <div className="row">
          <form onSubmit={this.saveData} method='post'>
            <div className="col-md-7">
              <div className="heading6">Contact <span>Us</span></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, nobis?
                <br />Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <input type="text" className="form-control" placeholder="Name" name='name' onChange={this.setName}/><br />
              <input type="email" className="form-control" placeholder="Email" name='email' onChange={this.setEmail}/><br />
              <input type="number" className="form-control" placeholder="Phone" name='phone' onChange={this.setPhone}/><br />
              <button id="contact-btn">Send Message</button>
            </div>
            </form>
            <div className="col-md-5" id="col">
              <h1>Info</h1>
              <p><i className="fa-regular fa-envelope"></i> example@gmail.com</p>
              <p><i className="fa-solid fa-phone"></i> +919999999966</p>
              <p><i className="fa-solid fa-building-columns"></i> Ducat,Pitampura, New Delhi, India</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur rerum magnam asperiores atque perferendis voluptate.</p>
            </div>
          </div>
        </div>
      </div>

            
            </>

    )
  }
}
