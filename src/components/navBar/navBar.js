import './navBar.css';


const options = ['Contact', 'Home', 'GitHub'];

export default function navBar() {
    return (
        <div>
            <nav> 
                    <ul>{options.map((option) => <li><a href = 'www.google.com'>{option}<div className = 'line'></div></a></li>)}</ul>
            </nav>
        </div>
    );
}