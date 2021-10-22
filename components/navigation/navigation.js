import {
    FaMoon,
    FaSun
} from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';

const Navigation = () => {
    return (
        <div className='top-navigation'>
            <ThemeIcon></ThemeIcon>
        </div>
    );
};

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode}>
            {darkTheme ? (
                <FaSun size='24' className='top-navigation-icon'></FaSun>
            ) : (
                <FaMoon size='24' className='top-navigation-icon'></FaMoon>
            )}
        </span>
    )
};

export default Navigation;