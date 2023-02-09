import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from "../assets/arrow-right.svg"
import mask from "../assets/Mask group.png"

export const Home = () => {
    return (
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