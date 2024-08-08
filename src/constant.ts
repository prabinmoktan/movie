import { TbJewishStar } from "react-icons/tb";
import { RiHeartAdd2Line } from "react-icons/ri";
import { MdLogout } from "react-icons/md";




export const navItem = [
  {name: 'Trending Movies', link: '/trendingMovies'},
  {name: 'Top IMDB', link: '/topRated'},
  {name: 'TV Shows', link: '/tvshows'}
]

export const genres = [
  { name: "Horror" },
  { name: "Action" },
  { name: "Romantic" },
  { name: "Adventure" },
];

export const usefulLinks = [
  { name: "Your Accounts" },
  { name: "Become an Affiliate" },
  { name: "Help" },
];
export const loginButton = [
  {name:'Watchlist', icon: RiHeartAdd2Line},
  {name:'Wishlist', icon: TbJewishStar},
  {name:'Logout', icon: MdLogout},
]
