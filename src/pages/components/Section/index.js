import React from 'react';

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

export default function Section() {
  return (
    <>
      <div className="gtco-section">
        <div className="gtco-container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
              <h2 className="cursive-font primary-color">Pratos Populares</h2>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num
                copo é motivis de denguis. Quem num gosta di mé, boa gentis num
                é.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <a href={img1} className="fh5co-card-item image-popup">
                <figure>
                  <div className="overlay">
                    <FaPlus style={iconStyle} />
                  </div>
                  <img src={img1} alt="img1" className="img-responsive" />
                </figure>
                <div className="fh5co-text">
                  <h2>Bife de Costela com molho</h2>
                  <p>
                    Vide electram sadipscing et per. Aenean aliquam molestie
                    leo, vitae iaculis nisl.
                  </p>
                  <p>
                    <span className="price cursive-font">R$35,69</span>
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <a href={img2} className="fh5co-card-item image-popup">
                <figure>
                  <div className="overlay">
                    <FaPlus style={iconStyle} />
                  </div>
                  <img src={img2} alt="img2" className="img-responsive" />
                </figure>
                <div className="fh5co-text">
                  <h2>Hambúrguer com Fritas</h2>
                  <p>
                    Vide electram sadipscing et per. Aenean aliquam molestie
                    leo, vitae iaculis nisl.
                  </p>
                  <p>
                    <span className="price cursive-font">R$22,80</span>
                  </p>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <a href={img3} className="fh5co-card-item image-popup">
                <figure>
                  <div className="overlay">
                    <FaPlus style={iconStyle} />
                  </div>
                  <img src={img3} alt="img3" className="img-responsive" />
                </figure>
                <div className="fh5co-text">
                  <h2>Chilli com Carne</h2>
                  <p>
                    Vide electram sadipscing et per. Aenean aliquam molestie
                    leo, vitae iaculis nisl.
                  </p>
                  <p>
                    <span className="price cursive-font">R$29,40</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
