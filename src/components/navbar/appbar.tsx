import {Link} from 'react-router-dom'
const pages = ['Home','Find a doctor', 'About Us', 'Client zone'];

function Appbar() {
    return (
        <section>
            <div className="container mx-auto">
                <nav className="flex justify-between items-center py-6 ">
                    <div className="Logo text-xl font-bold text-teal-900">MedKit</div>
                    <div className="Links flex justify-between items-center font-semibold">
                        <ul className="flex justify-center space-x-16 ">
                        {pages.map((page) => (
                            <li key={page}>
                                <Link to={`/${page.toLowerCase().replace(/\s+/g, '-')}`}>{page}</Link>
                            </li>
                        ))}
                    </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
}

export default Appbar;