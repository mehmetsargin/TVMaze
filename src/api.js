import axios from "axios";

export const fetchShowList = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/shows`)

    return data;
};

export const fetchShow = async (id) => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/shows/${id}`)
    return data;
}

export const fetchRegister = async (input) => {
    const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`,
        input
    );
    return data;
}