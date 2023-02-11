import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from "../assets/Component 1.svg"
import vrimage from "../assets/Mask group (1).png"

export const About = () => {
    return (
        <Wrapper>
            <div className='top_text-cnt'>
                <div className='left-text'>
                    <h1>INTRODUCTION</h1>
                    <div>
                        <h2>TO HYDRA VR</h2>
                        <Arrow />
                    </div>
                </div>
                <div className='right-text'>
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
            </div>
            <div className='bottom_img-cnt'>
                <div className='img-cnt'>
                    <img src={vrimage} alt="" />
                </div>
                <div className='vr_about-cnt'>
                    <h1>ABOUT</h1>
                    <h2>HYDRA VR</h2>
                    <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                    urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                    dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                    Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                    sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                    etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                    cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                    retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                    n tempor.</p>
                    <button>LET’S GET IN TOUCH</button>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 84px;
    .top_text-cnt {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left-text {
            h1 {
                font-style: normal;
                font-weight: 700;
                font-size: 36px;
                line-height: 44px;
                color: #FFFFFF;
            }
        
            div {
                h2 {
                    font-style: normal;
                    font-weight: 300;
                    font-size: 36px;
                    line-height: 44px;
                    color: #FFFFFF;
                }
                display: flex;
                align-items: center;
                gap: 10px;
            }
        }

        .right-text {
            p {
                width: 652px;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #FFFFFF;
            }
        }
    }
    
    .bottom_img-cnt {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 97px;
        .vr_about-cnt {
            h1 {
                font-style: normal;
                font-weight: 700;
                font-size: 36px;
                line-height: 44px;
                color: #FFFFFF;
                margin-top: -92px;
            }
            
            h2 {
                font-style: normal;
                font-weight: 300;
                font-size: 36px;
                line-height: 44px;
                color: rgba(255, 255, 255, 0.95);
            }

            p{
                width: 630px;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #FFFFFF;
                margin-top: 41px;
            }

            button {
                margin-top: 28px;
                width: 214px;
                height: 48px;
                left: 726px;
                top: 1691px;
                border: none;
                background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
                border-radius: 40px;
                font-style: normal;
                font-weight: 700;
                font-size: 12px;
                line-height: 15px;
                color: #343045;
            }
        }
    }
`