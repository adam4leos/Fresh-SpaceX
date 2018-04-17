// @flow

import React, { Component } from 'react';
import Spinner from './../../components/spinner/Spinner.jsx';
import type { CompanyDataType, RequestCompanyDataType } from '../../flowTypes/flowTypes';
import './main.scss';

type Props = {
  companyData: CompanyDataType,
  requestCompanyData: RequestCompanyDataType,
}

class Main extends Component<Props> {
  componentDidMount() {
    const { companyData } = this.props.companyData;

    if (companyData === undefined || Object.keys(companyData).length === 0) {
      this.onMainMount();
    }
  }

  onMainMount = async () => {
    this.props.requestCompanyData();
  }

  render() {
    const {
      name,
      summary,
      ceo,
      coo,
      cto,
      employees,
      founded,
      founder,
      valuation,
      error,
    } = this.props.companyData;

    if (Object.keys(this.props.companyData).length === 0) {
      return (
        <div className="main__spinner">
          <Spinner />
        </div>
      );
    } else if (error !== undefined) {
      return <div>{error.toString()}</div>;
    }

    return (
      <div className="main">
        <h1 className="main__heading">{name}</h1>
        <p className="main__description">{summary}</p>
        <img src="./src/img/spacex.png" alt="spacex" className="main__image" />
        <div className="main__information">
          <h2>CEO - {ceo}</h2>
          <h2>COO - {coo}</h2>
          <h2>CTO - {cto}</h2>
          <h3>Employees - {employees}</h3>
          <h3>Founded - {founded}</h3>
          <h3>Founder - {founder}</h3>
          <h3>Valuation - {valuation}</h3>
        </div>
      </div>
    );
  }
}

export default Main;
