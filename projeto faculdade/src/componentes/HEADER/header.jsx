import styled from "styled-components";
import Navegacao from "../NAV/navbar";

const ComteinerHeader = styled.header`

display: flex;
align-items: center;
justify-content: center;

`

function Header(){
    return (
        <ComteinerHeader>
        <Navegacao/>

        
        </ComteinerHeader>
    )
}
export default Header;