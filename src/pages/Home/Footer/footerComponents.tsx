import styled from 'styled-components';

const variables = {
    newTab: "#C13216"
}

export const Container = styled.footer`
    display: flex;
    width: 100vw;
    height: 12.32vh;
    color: #FFFFFF;
    background-image: linear-gradient(to bottom, #33383d, #2d3136, #272a2e, #222327, #1c1d20);
    z-index: 2;
    overflow: hidden;

    @media screen and (max-height: 600px) {
        height: 50vh !important;
        flex-wrap: wrap !important;
    }

    @media screen and (max-width: 768px) and (max-height: 500px) {
        height: 25vh !important;
        flex-wrap: nowrap !important;
    }

    @media screen and (max-width: 1024px) {
        height: 50vh;
        flex-wrap: wrap;
    }
 `

export const Greetings = styled.span`
    align-self: center;
    margin-left: 1vw;
    font-size: 1vw;
    white-space: nowrap;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        font-size: 7px !important;
        margin: 0 auto !important;
        margin-left: 3vw !important;
        margin-right: 3vw !important;
    }

    @media screen and (max-width: 1024px) {
        align-self: center;
        font-size: 3.4vw;
        margin: 0 auto;
    }
    
    @media screen and (min-width: 425px) and (max-width: 599px) {
        font-size: 3vw;
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        font-size: 17px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 18px;
    }
`

export const TextContainer = styled.div`
    display: flex;
    width: 30vw;
    height: 5vh;
    margin-left: 18.43vw;
    margin-top: 1.57vh;
    text-align: right;
    border-right: 1px solid #FFFFFF;

    @media screen and (max-width: 1024px) {
        align-self: flex-start;
        width: 98vw;
        margin-left: 0;
        margin-top: auto;
        margin-bottom: auto;
        height: auto;
        border: none;
        justify-content: center;
    }
`

export const Text = styled.span`
    font-size: 0.6vw;
    font-weight: 300;
    margin-top: 1.48vh;
    margin-right: 1.82vw;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        font-size: 8px !important;
        margin: 0 !important;
    }

    @media screen and (max-width: 1024px) {
        align-self: center;
        font-size: 3.4vw;
        margin: 0;
    }
    
    @media screen and (min-width: 425px) and (max-width: 599px) {
        font-size: 2.5vw;
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        font-size: 15px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 14px;
    }
`

export const RefreshContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 12.44vw;
    height: 6.66vh;
    margin-left: 6.4vw;
    margin-top: 0.8vh;

    @media screen and (max-width: 1024px) {
        width: 100vw;
        align-self: center;
        margin: auto;
        line-height: 20px;
        align-items: center;
    }
`

export const RefreshText = styled.div`
    width: 5.67vw;
    height: 4.53vh;
    font-size: 0.7vw;
    font-weight: 300;
    line-height: 1.66vh;
    text-align: right;
    margin-top: 2.4vh;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        font-size: 9px !important;
        line-height: 10px !important;
    }

    @media screen and (max-width: 1024px) {
        align-self: center;
        margin: 0;
        font-size: 13px;
        line-height: 15px;
        width: auto;
        height: auto;
    }

    @media screen and (min-width: 425px) and (max-width: 767px) {
        font-size: 14px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 20px;
    }
`

export const SecondsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 5.05vw;
    height: 6.57vh;

    @media screen and (max-width: 1024px) {
        margin-left: 1vw;
        align-self: center;
        width: auto;
        height: auto;
    }
`

export const Seconds = styled.span`
    font-size: 2.5vw;
    font-weight: 700;
    line-height: 4vh;
    margin-top: 1.29vh;
    text-align: center;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        font-size: 20px !important;
        line-height: 20px !important;
    }

    @media screen and (max-width: 1024px) {
        font-size: 25px
    }

    @media screen and (min-width: 425px) and (max-width: 767px) {
        font-size: 33px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 38px;
    }
`

export const UnderText = styled.span`
    font-size: 0.7vw;
    font-weight: 300;
    line-height: 1.66vh;
    text-align: center;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        font-size: 10px !important;
    }

    @media screen and (max-width: 424px) {
        font-size: 12px;
    }

    @media screen and (min-width: 425px) and (max-width: 767px) {
        font-size: 17px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        line-height: 20px;
        font-size: 20px;
    }
`

export const NewTabContainer = styled.button`
    cursor: pointer;
    height: 100%;
    width: 6.8vw;
    display: flex;
    margin-left: auto;
    font-size: 0.625vw;
    font-weight: 400;
    line-height: 1.38vh;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border: none;
    color: ${variables.newTab};

    @media screen and (max-width: 768px) and (max-height: 500px) {
        height: 100% !important;
        font-size: 9px !important;
        line-height: 15px !important;
    }

    @media screen and (max-width: 1024px) {
        height: 30%;
        width: 50vw;
        margin: 0;
        align-self: flex-end;
        font-size: 16px;
        line-height: 20px;
        align-items: center;
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        font-size: 20px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 17px;
    }
`

export const Logout = styled.button`
    cursor: pointer;
    color: #FFFFFF;
    height: 100%;
    width: 6.8vw;
    display: flex;
    font-size: 0.625vw;
    font-weight: 400;
    line-height: 1.38vh;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        height: 100% !important;
        font-size: 9px !important;
        line-height: 15px !important;
    }

    @media screen and (max-width: 1024px) {
        height: 30%;
        width: 50vw;
        margin: 0;
        align-self: flex-end;
        font-size: 16px;
        line-height: 20px;
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        font-size: 20px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 22px;
    }
`