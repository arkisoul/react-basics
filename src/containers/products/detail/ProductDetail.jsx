import { useParams, useLocation } from 'react-router-dom';
import MainLayout from '../../../layout/main/Main'

export default function ProductDetail(props) {
    const params = useParams();
    const location = useLocation()
    console.log(params, location);
    return <MainLayout main={<h1>Product detail page</h1>} />;
}