import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from 'styled-components';

const Ahh = styled.div`
    border: solid rgba(100, 116, 139, 0.12);
    border-radius: 8px;
`;

const Addr = styled.div`
    height: 266px;
    border: solid rgba(100, 116, 139, 0.12);
`;
function Addresses() {
    return (
        <Ahh class="d-inline-flex flex-column mt-5">
            <div class="title p-4">Адреса заведений</div>
            <Addr class="d-inline-flex flex-column">
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </Addr>
            <div class="d-inline-flex p-4">
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>  
        </Ahh>
    );
}

export default Addresses;