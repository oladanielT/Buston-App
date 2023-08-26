import { AiFillHeart, AiFillTag } from 'react-icons/ai';
import {TbTruckDelivery} from 'react-icons/tb';
import {FaUserFriends, FaWallet} from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import {MdHelp} from 'react-icons/md'

export const Navdata = [
    {
        id:1,
        title:'Orders',
        icon:<TbTruckDelivery size={25}/>
    },
    {
        id:2,
        title:'Favorites',
        icon:<AiFillHeart size={25}/>
    },
    {
        id:1,
        title:'Wallet',
        icon:<FaWallet size={25}/>
    },
    {
        id:1,
        title:'Help',
        icon:<MdHelp size={25}/>

    },
    {
        id:1,
        title:'Promotions',
        icon:<AiFillTag size={25}/>
    },
    {
        id:1,
        title:'Best Ones',
        icon:<BsFillCartFill size={25}/>
    },
    {
        id:1,
        title:'Invites Friends',
        icon:<FaUserFriends size={25}/>
    },
]