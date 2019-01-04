import { Episode } from "../models/models";

export default {
    ormReducer: {
        Show: [
            { id: 1 }
        ],
        Season: [
            {
                id: 2,
                show_id:1,
            }
        ],
        Episode:[
            {
                id:3,
                title:"title",
                duration:"33",
                season_id:2,
            }
        ]
    }
}