import React, { Component } from 'react';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import img1 from '../../../images/img_1.jpg';
import img2 from '../../../images/img_2.jpg';
import img3 from '../../../images/img_3.jpg';
import { FaPlus } from 'react-icons/fa';

const iconStyle = {
  fontSize: 30,
  color: '#fff',
  position: 'absolute',
  top: '45%',
  left: '45%',
};

export default class Section extends Component {
  state = {
    menus: [],
  };

  async componentDidMount() {
    const response = await api.get('menus');
    this.setState({ menus: response.data.slice(0, 3) });
  }

  render() {
    const { menus } = this.state;

    return (
      <>
        <div className="gtco-section">
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                <h2 className="cursive-font primary-color">Pratos Populares</h2>
                <p>
                  Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis
                  num copo é motivis de denguis. Quem num gosta di mé, boa
                  gentis num é.
                </p>
              </div>
            </div>

            <div className="row">
              {menus.map(menu => (
                <div className="col-lg-4 col-md-4 col-sm-6" key={menu.id}>
                  <a href={menu.photo} className="fh5co-card-item image-popup">
                    <figure>
                      <div className="overlay">
                        <FaPlus style={iconStyle} />
                      </div>
                      <img
                        src={menu.photo}
                        alt={menu.title}
                        className="img-responsive"
                      />
                    </figure>
                    <div className="fh5co-text">
                      <h2>{menu.title}</h2>
                      <p>{menu.description}</p>
                      <p>
                        <span className="price cursive-font">
                          {formatPrice(menu.price)}
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
