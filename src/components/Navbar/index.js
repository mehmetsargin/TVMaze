import { React } from "react";
import { useSearchMovie } from "../../contexts/SearchMovieContext";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button, } from '@chakra-ui/react'
import { useAuth } from "../../contexts/AuthContext";
import { useWatchList } from "../../contexts/WatchListContext";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";



function Navbar() {

    const { setSearchText, handleClick } = useSearchMovie();

    const { loggedIn } = useAuth();
    const { items } = useWatchList();


    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/"><span>TV</span>Maze</Link>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">All Shows</Link>
                    </li>
                    <li>
                        <Link to="/action">Action</Link>
                    </li>
                    <li>
                        <Link to="/drama">Drama</Link>
                    </li>
                    <li>
                        <Link to="/horror">Horror</Link>
                    </li>
                    <li>
                        <Link to="/comedy">Comedy</Link>
                    </li>
                    <li>
                        <Link to="/adventure">Adventure</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.right} >
                {!loggedIn && (
                    <div >
                        <Link to="/signin">
                            <Button colorScheme='pink'>Login</Button>
                        </Link>
                        <Link to="/signup">
                            <Button colorScheme='pink'>Register</Button>
                        </Link>
                    </div>
                )}
                {loggedIn && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="input-group rounded">
                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"
                                onChange={(e) => { e.preventDefault(); setSearchText(e.target.value) }} />
                            <span className="input-group-text border-0" id="search-addon">
                                <i onClick={handleClick} className="fas fa-search"></i>
                            </span>
                        </div>
                        {items.length > 0 && (
                            <Link to="/watchlist">
                                <Button colorScheme="pink" variant="outline">
                                    Watch List ({items.length})
                                </Button>
                            </Link>
                        )}

                        <Link to="/profile">
                            <Button >Profile</Button>
                        </Link>
                    </div>

                )}

            </div>
        </nav>

    )
}

export default Navbar