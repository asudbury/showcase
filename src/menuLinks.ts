import HomeIcon from '@mui/icons-material/Home';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import TwitterIcon from '@mui/icons-material/Twitter';
import CalculateIcon from '@mui/icons-material/Calculate';
import BarChartIcon from '@mui/icons-material/BarChart';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FlareIcon from '@mui/icons-material/Flare';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

export default function MenuLinks() {
  return [
    {
      url: '/',
      text: 'Home',
      icon: HomeIcon
    },
    {
      url: '/showcase/netflix',
      text: 'Netflix',
      icon: MovieFilterIcon
    },
    {
      url: '/showcase/spotify',
      text: 'Spotify',
      icon: LibraryMusicIcon
    },
    {
      url: '/showcase/twitter',
      text: 'Twitter',
      icon: TwitterIcon
    },
    {
      url: '/showcase/gmail',
      text: 'Gmail',
      icon: EmailIcon
    },
    {
      url: '/showcase/youtube',
      text: 'YouTube',
      icon: YouTubeIcon
    },
    {
      url: '/showcase/airbnb',
      text: 'AirBnb',
      icon: HolidayVillageIcon
    },
    {
      url: '/showcase/spaceX',
      text: 'SpaceX',
      icon: FlightTakeoffIcon
    },
    {
      url: '/showcase/charts',
      text: 'Charts',
      icon: BarChartIcon
    },
    {
      url: '/showcase/spreadsheet',
      text: 'SpreadSheet',
      icon: AccountBalanceIcon
    },
    {
      url: '/showcase/calculator',
      text: 'Calculator',
      icon: CalculateIcon
    },
    {
      url: '/showcase/space-invaders',
      text: 'Space Invaders',
      icon: WorkspacesIcon
    },
    {
      url: '/showcase/temperature-calculator',
      text: 'Temp Calc',
      icon: WbSunnyIcon
    },
    {
      url: '/showcase/fireworks',
      text: 'Fireworks',
      icon: FlareIcon
    }
  ];
}
