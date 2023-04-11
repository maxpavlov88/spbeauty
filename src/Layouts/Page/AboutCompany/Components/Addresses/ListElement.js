import styled from 'styled-components';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';

const Option = styled.div`
    outline: none;
    font-size: 15px;
    color: #666787;
    border: solid rgba(100, 116, 139, 0.12);
`;
const Iconic = styled.div`
    outline: none;
    color: #666787;
    border: solid rgba(100, 116, 139, 0.12);
`;

const Str = styled.div`
    outline: none;
    color: #666787;
`;
function ListElement(props) {
    return (
        <Str className='d-flex flex-row align-items-center'>
            <Option className='flex-grow-1 px-3 py-3 mb-2'>{props.children}</Option>
            <Iconic className='d-flex  justify-content-between px-3 pt-3 pb-2 mb-2'>  
                <EditIcon>Ред.</EditIcon>
                <RemoveIcon>Удл.</RemoveIcon>
            </Iconic>  
        </Str>
    );
}

export default ListElement;