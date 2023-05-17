import { Outlet } from 'react-router-dom';
import ProductNavbar from '../../../components/ProductNavbar';
import './styles.css';

export default function Products() {
    return (
        <main>
            <section className="section-container">
                <ProductNavbar />
                <Outlet />
            </section>
        </main>
    );
}
