import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ITweet {
    id: number
    user: string;
    name: string;
    profileImg: string;
    message: string;
    messageImg: string
}

const tweets: ITweet[] = [{
    id: 1,
    user: 'HBOMaxLa',
    name: 'HBO Max Latinoamerica',
    profileImg: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore delectus sunt doloremque aliquam! Ipsam cumque quos perspiciatis voluptate culpa maxime nostrum at praesentium ullam ad, voluptas incidunt assumenda dicta minima.',
    messageImg: 'https://d500.epimg.net/cincodias/imagenes/2021/10/05/lifestyle/1633443991_639304_1633444188_noticia_normal.jpg'
},
{
    id: 2,
    user: 'HBOMaxLa',
    name: 'HBO Max Latinoamerica',
    profileImg: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore delectus sunt doloremque aliquam! Ipsam cumque quos perspiciatis voluptate culpa maxime nostrum at praesentium ullam ad, voluptas incidunt assumenda dicta minima.',
    messageImg: 'https://d500.epimg.net/cincodias/imagenes/2021/10/05/lifestyle/1633443991_639304_1633444188_noticia_normal.jpg'
},
{
    id: 3,
    user: 'HBOMaxLa',
    name: 'HBO Max Latinoamerica',
    profileImg: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore delectus sunt doloremque aliquam! Ipsam cumque quos perspiciatis voluptate culpa maxime nostrum at praesentium ullam ad, voluptas incidunt assumenda dicta minima.',
    messageImg: 'https://d500.epimg.net/cincodias/imagenes/2021/10/05/lifestyle/1633443991_639304_1633444188_noticia_normal.jpg'
},
{
    id: 4,
    user: 'HBOMaxLa',
    name: 'HBO Max Latinoamerica',
    profileImg: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore delectus sunt doloremque aliquam! Ipsam cumque quos perspiciatis voluptate culpa maxime nostrum at praesentium ullam ad, voluptas incidunt assumenda dicta minima.',
    messageImg: 'https://d500.epimg.net/cincodias/imagenes/2021/10/05/lifestyle/1633443991_639304_1633444188_noticia_normal.jpg'
}]


export interface TweetState {
    tweets: ITweet[]
}

const initialState: TweetState = {
    tweets: tweets,
}

export const counterSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers: {

    },
})

// Action creators are generated for each case reducer function
export const { } = counterSlice.actions

export default counterSlice.reducer