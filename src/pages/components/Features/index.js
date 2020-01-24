import React from 'react';
import {FaCloud, FaTruck, FaSmile} from 'react-icons/fa';

const iconStyle = {
  fontSize:48,
  marginTop:18
}

export default function Features(){
  return (
    <>
      <div id="gtco-features">
            <div class="gtco-container">
              <div class="row">
                <div class="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                  <h2 class="cursive-font">Nossos Serviços</h2>
                  <p>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi!</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-sm-6">
                  <div class="feature-center animate-box" data-animate-effect="fadeIn">
                    <span class="icon">
                      <FaSmile style={iconStyle}/>
                    </span>
                    <h3>Pessoas Felizes</h3>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi!</p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="feature-center animate-box" data-animate-effect="fadeIn">
                    <span class="icon">
                      <FaCloud style={iconStyle}/>
                    </span>
                    <h3>Culinária Criativa</h3>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi!</p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="feature-center animate-box" data-animate-effect="fadeIn">
                    <span class="icon">
                      <FaTruck style={iconStyle}/>
                    </span>
                    <h3>Delivery</h3>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi!</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
    </>
  );
}
