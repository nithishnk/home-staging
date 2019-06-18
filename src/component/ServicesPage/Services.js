import React, { Component } from 'react'

export default class Services extends Component {
  render() {
    return (
      <div className="container my-5">
      <div className="d-flex flex-row bd-highlight mb-3">
          <div className="p-3 bd-highlight"><a className="text-dark font-weight-bold" href="/Service">All Services</a></div>
          <div className="p-3 bd-highlight"><a className="text-dark font-weight-bold" href="/vacant">Vacant</a></div>
          <div className="p-3 bd-highlight"><a className="text-dark font-weight-bold" href="/Occupied">Occupied</a></div>
          <div className="p-3 bd-highlight"><a className="text-dark font-weight-bold" href="/Individuals">Individuals</a></div>
          <div className="p-3 bd-highlight"><a className="text-dark font-weight-bold" href="/Brokers">Brokers</a></div>
          <div className="p-3 bd-highlight"><a className="text-dark font-weight-bold" href="/RealEstate">Real Estate</a></div>
          </div>
      </div>
    )
  }
}
