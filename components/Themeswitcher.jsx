import { useTheme } from '../app/Contaxt/ThemeContext';
import { MoonIcon } from '@radix-ui/react-icons';
import { SunIcon } from '@radix-ui/react-icons';
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
   
<div className='m-12'>



  <button onClick={toggleTheme}> 
    { theme === 'light' ? <SunIcon /> : <MoonIcon />   }  
    </button>  
 
   
</div>
  )
}

export default ThemeSwitcher;
