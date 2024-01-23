import React from 'react'
import { Box, Image, Button } from "@chakra-ui/react";
import moment from "moment";
import { Link } from 'react-router-dom';
import { useWatchList } from "../../contexts/WatchListContext";
import { MdOutlineStarRate } from "react-icons/md";

function Card({ item }) {


    const { addToWatchList, items } = useWatchList();
    const findWatchListItem = items.find(
        (watchList_item) => watchList_item.id === parseInt(item.id, 10)
    );

    return (

        <Box borderWidth="1px" overflow="hidden" p="1" ml="30px" mt="40px" >
            <Link to={`/shows/${item.id}`}>
                <Image src={item.image.medium} width="300px" borderRadius="20px" alt='show' loading='lazy' />

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Box mt="3" fontWeight="semibold" as='h4' lineHeight="tight" >
                        {item.name}
                    </Box>
                    <Box mt="1" >
                        Ended Date:  {moment(item.ended).format("DD/MM/YYYY")}
                    </Box>
                    <Box mt="1" display="flex" alignItems="center">
                        <MdOutlineStarRate /> {item.rating.average}
                    </Box>

                </div>
            </Link>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Button
                    mt="1"
                    colorScheme={findWatchListItem ? "pink" : "green"}
                    variant="solid"
                    onClick={() => addToWatchList(item, findWatchListItem)}

                >
                    {
                        findWatchListItem ? "Remove from Watch List" : "Add to Watch List"
                    }
                </Button>
            </div>
        </Box >

    )
}

export default Card