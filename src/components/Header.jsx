import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from "../assets/logo.svg";

export const Header = () => {
    const navData = [
        {
            id: 2,
            name: "ABOUT"
        },
        {
            id: 3,
            name: "SERVICES"
        },
        {
            id: 4,
            name: "TECHNOLOGIES"
        },
        {
            id: 5,
            name: "HOW TO"
        },
    ]
    
    return (
        <Wrapper>
            <div className='logo_cnt'>
                <Logo />
                <h1>HYDRA</h1>
            </div>
            
            <nav>
                <ul>
                    {navData.map((item) => {
                        return (
                            <li key={item.key}>
                                {item.name}
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <div className='btn_cnt'>
                <button className='btn1'>CONTACT US</button>
                <button className='btn2'>JOIN HYDRA</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 80px;
    .logo_cnt {
        display: flex;
        align-items: center;
        h1 {
            font-weight: 300;
            color: #8176AF;
        }
    }

    ul {
        display: flex;
        align-items: center;
        gap: 42px;
        justify-content: space-between;
        li {
            list-style: none;
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            color: #FFFFFF;
            font-family: "Montserrat", sans-serif;
            cursor: pointer;
            :hover {
                border-bottom: 2px solid #FFFFFF;
            } 
        }
    }

    .btn_cnt {
        display: flex;
        gap: 38px;
        button {
            width: 154px;
            height: 48px;
            border: 2px solid #FFFFFF;
            border-radius: 40px;
            font-weight: 600;
            cursor: pointer;
        }
        .btn1 {
            background-color: transparent;
            color: white;
        }
        .btn2 {
            background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
            border-radius: 40px;
            border: none;
            color: #343045;
        }
    }
`