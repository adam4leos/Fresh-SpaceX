import React from 'react';
import PropTypes from 'prop-types';
import './main.scss';

class Main extends React.Component {
  componentDidMount() {
    if (Object.keys(this.props.companyData).length === 0) {
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
    } = this.props.companyData;

    return (
      <div className="main">
        <h1 className="main__heading">{name}</h1>
        <p className="main__description">{summary}</p>
        <img src="/src/img/spacex.png" alt="spacex" className="main__image" />
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

Main.propTypes = {
  companyData: PropTypes.shape({
    name: PropTypes.string,
    summary: PropTypes.string,
    ceo: PropTypes.string,
    coo: PropTypes.string,
    cto: PropTypes.string,
    employees: PropTypes.number,
    founded: PropTypes.number,
    founder: PropTypes.string,
    valuation: PropTypes.number,
  }).isRequired,
  requestCompanyData: PropTypes.func.isRequired,
};

export default Main;
