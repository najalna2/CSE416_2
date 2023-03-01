import '../css/DistrictInfo.css';
import { useLocation } from 'react-router-dom';

export default function DistrictInfo() {
    const location = useLocation();
    const params = location.pathname.split('/');
    const state = params[params.length - 1].substring(0, 2);
    const district = params[params.length - 1].substring(2);
    return (
        <span>Displaying info about {state}'s district {district}</span>
    )
}