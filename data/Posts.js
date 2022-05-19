import { Users } from "./Users";

export const Posts = [
    {
        imageURL: 'https://i.pinimg.com/736x/85/55/a1/8555a1ac952fdff68aef954eb62acbc5.jpg',
        user: Users[0].user,
        likes: 253,
        caption: 'Love flowers <3',
        profile_picture: Users[0].image,
        comments: [ 
            {
                user: 'Cosmin',
                comment: 'Beautifull'
            }
        ]
    },
    {
        imageURL: 'https://i.pinimg.com/564x/95/0c/cb/950ccb88f4ac0ac8a3445f6d900cc686.jpg',
        user: Users[2].user,
        likes: 186,
        caption: 'I love Hermione!',
        profile_picture: Users[2].image,
        comments: [ 
            {
                user: 'fusereminds123s',
                comment: 'Team Gryffindors!'
            },
            {
                user: 'kaicigarettes',
                comment: 'Ema Watson ♥️'
            }
        ]
    }
]