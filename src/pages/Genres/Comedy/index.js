import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchShowList } from "../../../api";
import { Grid } from "@chakra-ui/react";
import Card from '../../../components/Card';
import { useSearchMovie } from '../../../contexts/SearchMovieContext';


function Comedy() {

    const { searchTextTrim } = useSearchMovie();


    const { isPending, error, data } = useQuery({
        queryKey: ['shows'],
        queryFn: fetchShowList
    })

    const actionList = data?.filter(item => item.genres.includes("Comedy"))
    const filteredData = actionList?.filter(item => item.name.toLowerCase().includes(searchTextTrim.toLowerCase()))


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

export default Comedy