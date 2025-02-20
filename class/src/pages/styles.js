import styled from "@emotion/styled"

export const Home__IconBar = styled.div`
    width:100%;
    max-width:500px;
    padding-right:16px;

    display:flex;
    flex-direction:row-reverse;
    gap:16px;
`

export const Home__CalBar = styled.div`
    width:100%;
    max-width: 500px;
    margin-top:20px;
    padding: 0 16px;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-end;
`

export const Home__CalTitle = styled.div`
    font-size: 24px;
    font-weight:700;
    color:#111111;
`

export const Home__CalMore = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    font-size:16px;
    letter-spacing:-2.5%;
    color:#767676;
`

export const Home_CalMore_Image = styled.img`
    width:9px;
    height:9px;
`