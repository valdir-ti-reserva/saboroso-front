import React from 'react';

import img1 from '../../../images/img_1.jpg';
import img2 from '../../../images/img_2.jpg';
import img3 from '../../../images/img_3.jpg';
import { FaPlus } from 'react-icons/fa';

const iconStyle = {
  fontSize:30,
  color:'#fff',
  position:'absolute',
  top:'45%',
  left:'45%'
}

export default function Section(){
  return(
    <>
      <div class="gtco-section">
            <div class="gtco-container">
              <div class="row">
                <div class="col-md-8 col-md-offset-2 text-center gtco-heading">
                  <h2 class="cursive-font primary-color">Pratos Populares</h2>
                  <p>Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. Quem num gosta di mé, boa
                    gentis num é.</p>
                </div>
              </div>
              <div class="row">

                <div class="col-lg-4 col-md-4 col-sm-6">
                  <a href={img1} class="fh5co-card-item image-popup">
                    <figure>
                      <div class="overlay">
                        <FaPlus style={iconStyle}/>
                      </div>
                      <img src={img1} alt="img1" class="img-responsive" />
                    </figure>
                    <div class="fh5co-text">
                      <h2>Bife de Costela com molho</h2>
                      <p>Vide electram sadipscing et per. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                      <p>
                        <span class="price cursive-font">R$35,69</span>
                      </p>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <a href={img2} class="fh5co-card-item image-popup">
                    <figure>
                      <div class="overlay">
                        <FaPlus style={iconStyle}/>
                      </div>
                      <img src={img2} alt="img2" class="img-responsive" />
                    </figure>
                    <div class="fh5co-text">
                      <h2>Hambúrguer com Fritas</h2>
                      <p>Vide electram sadipscing et per. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                      <p>
                        <span class="price cursive-font">R$22,80</span>
                      </p>

                    </div>
                  </a>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6">
                  <a href={img3} class="fh5co-card-item image-popup">
                    <figure>
                      <div class="overlay">
                        <FaPlus style={iconStyle}/>
                      </div>
                      <img src={img3} alt="img3" class="img-responsive" />
                    </figure>
                    <div class="fh5co-text">
                      <h2>Chilli com Carne</h2>
                      <p>Vide electram sadipscing et per. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                      <p>
                        <span class="price cursive-font">R$29,40</span>
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
