import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchShow } from '../../api';
import moment from 'moment';
import { useWatchList } from '../../contexts/WatchListContext';
//import styles from "./styles.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineStarRate } from "react-icons/md";

function ShowDetail() {

    const { addToWatchList, items } = useWatchList();
    const { id } = useParams();
    const { isPending, error, data } = useQuery({
        queryKey: ["show", id],
        queryFn: () => fetchShow(id)
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const findWatchListItem = items.find((item) => item.id === parseInt(id, 10));

    const div = document.createElement("div");
    div.innerHTML = data.summary;
    const summary = div.firstChild;


    return (
        <div className="container" style={{ backgroundColor: "#DCF2F1" }}>

            <div className="row mt-5 ">

                <div className="col-md-3 mt-5" >
                    <img alt={data.image.name} width={300} src={data.image.medium} />
                </div>

                <div className="col-md-9 mt-5">
                    <h2 > {data.name}</h2>

                    <h5 className='mt-4'>Ended Date: {moment(data.ended).format("DD/MM/YYYY")}</h5>

                    <p className='mt-4' dangerouslySetInnerHTML={{ __html: summary.innerHTML }} style={{ marginRight: "30px", fontFamily: "Courier", color: "#23252F" }}>

                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', fontSize: "20px", fontWeight: "bold" }}>
                        <MdOutlineStarRate /> {data.rating.average}
                    </div>
                    <h6 className='mt-3'>
                        {data.language}
                    </h6>
                    <ul className='mt-5 d-flex list-unstyled'>
                        Genres:
                        {data.genres.map((genre) => (
                            <li key={genre} style={{ marginLeft: "10px", fontFamily: "Courier", color: "#23252F" }}>{genre}</li>
                        ))}
                    </ul>
                </div>
                <button
                    style={{ height: "50px", marginBottom: "200px", marginTop: "50px" }}
                    type='button'
                    className={findWatchListItem ? " btn btn-primary col-6 mx-auto " : "btn btn-success col-6 mx-auto "}
                    onClick={() => addToWatchList(data, findWatchListItem)}>
                    {
                        findWatchListItem ? "Remove from Watch List" : "Add To Watch List"
                    }
                </button>

            </div>



        </div>
    )
}

export default ShowDetail