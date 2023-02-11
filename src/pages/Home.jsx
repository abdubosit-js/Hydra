import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from "../assets/arrow-right.svg"
import { ReactComponent as Location } from "../assets/Location-Icon.svg"
import { ReactComponent as Mail } from "../assets/mail.svg"
import { ReactComponent as Phone } from "../assets/phone-call.svg"
import mask from "../assets/Mask group.png"

export const Home = () => {
    return (
        <>
            <Wrapper>
                <div className='text-container'>
                    <h1><span>Dive</span> Into The Depths</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                    <div className='btn-flex'>
                        <button>BUILD YOUR WORLD</button>
                        <Arrow />
                    </div>
                </div>
                <div className='image-container'>
                    <div>
                        <img src={mask} alt="" />
                    </div>
                </div>
            </Wrapper>
            <RectWrapper>
                <div className='rect-container'>
                    <div className='rext'>
                        <Location/>
                        <div className='text-cnt'>
                            <h1>Pay Us a Visit</h1>
                            <p>Union St, Seattle, WA 98101, United States</p>
                        </div>
                    </div>
                    <div className='rext'>
                        <Phone/>
                        <div className='text-cnt'>
                            <h1>Give Us a Call</h1>
                            <p>(110) 1111-1010</p>
                        </div>
                    </div>
                    <div className='rext'>
                        <Phone/>
                        <div className='text-cnt'>
                            <h1>Send Us a Message</h1>
                            <p>Contact@HydraVTech.com</p>
                        </div>
                    </div>
                </div>
            </RectWrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 84px;
    .text-container {
        h1 {
            font-style: normal;
            font-weight: 700;
            font-size: 46px;
            line-height: 56px;
            span {
                background: linear-gradient(91.57deg, #C0B7E8 -1.02%, #8176AF 36.25%);
                text-fill-color: transparent;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            background-clip: text;
            color: white;
            margin-bottom: 100px;
        }
        p {
            width: 450px;
            height: 72px;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #FFFFFF;
        }
        
        .btn-flex {
            display: flex;
            align-items: center;
            margin-top: 60px;
            button {
                width: 214px;
                height: 48px;
                background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
                border-radius: 40px;
                border: none;
                color: #302C42;
                font-weight: 600;
                cursor: pointer;
            }
        }
    }
    .image-container {
        div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 524px;
            height: 455px;
            background: rgba(0, 0, 0, 0.13);
            border-radius: 105px 105px 105px 255px;
        }
    }
`

const RectWrapper = styled.div`
    padding: 103px 84px;
    .rect-container {
        width: 100%;
        height: 167px;
        background: radial-gradient(50% 2900.76% at 50% 53.89%, rgba(58, 52, 86, 0.95) 0%, #211E2E 100%);
        box-shadow: 0px 4px 4px rgba(192, 183, 232, 0.01);
        border-radius: 83.5px;
        display: flex; 
        align-items: center;
        justify-content: space-between;
        padding: 50px 40px;
        .rext {
            display: flex;
            align-items: center;
            gap: 7px;
            .text-cnt {
                h1 {
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                    color: #FFFFFF;
                }
                p {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 17px;
                    color: #FFFFFF;
                }
            }
        }
    }
`