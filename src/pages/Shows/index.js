import React from 'react'
import Card from '../../components/Card'
import { Grid } from "@chakra-ui/react";
import { useQuery } from '@tanstack/react-query'
import { fetchShowList } from "../../api";
import { useSearchMovie } from '../../contexts/SearchMovieContext';

function Shows() {

    const { searchTextTrim } = useSearchMovie();


    const { isPending, error, data } = useQuery({
        queryKey: ['shows'],
        queryFn: fetchShowList
    })
    const filteredData = data?.filter(item => item.name.toLowerCase().includes(searchTextTrim.toLowerCase()))

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div style={{ marginLeft: "50px", marginRight: "50px" }}>
            <Grid templateColumns='repeat(5, 1fr)' rowGap={3} columnGap={1}>
                {filteredData.map((item, key) => (
                    <Card key={key} item={item} />
                ))}
            </Grid>
        </div>
    )
}

export default Shows