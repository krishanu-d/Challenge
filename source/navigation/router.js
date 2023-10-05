import Leaderboard from '../screens/leaderboard';
import Leagues from '../screens/league';
import Profile from '../screens/profile';
import Research from '../screens/research';
import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';

const Routes = {
  Screen1: {
    name: 'Screen1',
    Screen: Screen1,
    title: 'Screen 1',
  },
  Screen2: {
    name: 'Screen2',
    Screen: Screen2,
    title: 'Screen 2',
  },
  Leagues:{
    name: 'Leagues',
    Screen: Leagues,
    title: 'Leagues',
  },
  Research:{
    name: 'Research',
    Screen: Research,
    title: 'Research',
  },
  Leaderboard:{
    name: 'Leaderboard',
    Screen: Leaderboard,
    title: 'Leaderboard',
  },
  Profile:{
    name: 'Profile',
    Screen: Profile,
    title: 'Profile',
  },

  
};

export default Routes;
