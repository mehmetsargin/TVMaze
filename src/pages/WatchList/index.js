import React from 'react';
import { useWatchList } from "../../contexts/WatchListContext";
import { Link } from 'react-router-dom';
import { Alert, Box, Button, Grid, Image, Text, } from "@chakra-ui/react";


function WatchList() {
    const { items, removeFromWatchList } = useWatchList();
    //console.log(items)
    return (
        <Box p={5}>
            {items.length < 1 && <Alert status="warning">You have not any items in your watch list.</Alert>}

            {items.length > 0 &&
                <>
                    <ul >
                        <Grid ml="50px" mr="50px" templateColumns='repeat(5, 1fr)' rowGap={3} columnGap={1} gridTemplateColumns="repeat(auto-fill, minmax(220px, 1fr))">
                            {
                                items.map((item) => (
                                    <li key={item.id} style={{ marginBottom: 15, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #c1bfc7', padding: '10px', borderRadius: '10px' }}>
                                        <Link to={`/shows/${item.id}`}>
                                            <Text style={{ textAlign: 'center' }} fontSize="18">{item.name} - {item.rating.average}</Text>
                                            <Image htmlWidth={200} loading='lazy' src={item.image.medium} alt='watch-list item' />
                                        </Link>
                                        <Button mt="2" size="sm" colorScheme='pink' onClick={() => removeFromWatchList(item.id)}>
                                            Remove from watch list
                                        </Button>
                                    </li>
                                ))
                            }
                        </Grid>
                    </ul>
                </>
            }
        </Box>
    )
}

export default WatchList