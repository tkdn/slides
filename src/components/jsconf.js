import styled from "styled-components"

export const SizeL = styled.span`
    transform: scale(2, 2);
`

export const SlideTitle = styled.h1`
    margin: .25em 0;
    span {
        display: block;
        font-size: 36px;
        color: #666;
    }
`

export const Profile = styled.div`
    overflow: hidden;
    img {
        border-radius: 120px;
    }
`

export const ProfileImage = styled.div`
    float: left;
    margin-right: 6vw;
`
export const ProfileList = styled.div`
    overflow: hidden;
`
export const FlexImage = styled.img`
    height: 60vh;
`

export const TableAdjuster = styled.div`
    ${props => `
        th, td {
            width: ${props.colWidth};
        }
        ${props.headFontSize ? `
            th {
                font-size: ${props.headFontSize};
            }
            small {
                font-size: .5em;
            }
        `: null}
        ${props.headNone ? `
            td {
            }
            thead {
                display: none;
            }
        ` : null}
    `}
`
export const SectionTitle = styled.div`
    h2 {
        position: relative;
        display: inline-block;
        &::before {
            content: "";
            display: block;
            width: 1.5em;
            height: .1em;
            position: absolute;
            top: 80%;
            right: calc(-1.5em + -.5em);
            background-color: #f90;
        }
    }
`
