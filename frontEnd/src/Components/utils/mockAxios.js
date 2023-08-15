const mockAxios = {
    get: async () => {
        return Promise.resolve({
            data: [
                {
                    "_id": "5cc08495bf3fd62d03f2f4c1",
                    "peepMessage": "Wishing you a lovely day!",
                    "peepDateCreated": "2019-05-04T15:00:00.000Z",
                    "peepCreatedBy": "Marion Jung",
                    "username": "rainbow"
                },
                {
                    "_id": "5cc08495bf3fd62d03f2f4c2",
                    "peepMessage": "I love coding!",
                    "peepDateCreated": "2018-05-04T15:30:00.000Z",
                    "peepCreatedBy": "Britney Spears",
                    "username": "waterfall"
                },
                {
                    "_id": "5cc08495bf3fd62d03f2f4c3",
                    "peepMessage": "This is all very exciting",
                    "peepDateCreated": "2022-05-04T15:45:00.000Z",
                    "peepCreatedBy": "Lee Ryan",            
                    "username": "BlueSky"
                },
                {
                    "_id": "5cc08495bf3fd62d03f2f4c4",
                    "peepMessage": "Let's finish this task",
                    "peepDateCreated": "2021-05-04T16:00:00.000Z",
                    "peepCreatedBy": "George Michael",
                    "username": "LastChristmas"
                },
                {
                    "_id": "5cc08495bf3fd62d03f2f4c6",
                    "peepMessage": "Wishing you a lovely day!",
                    "peepDateCreated": "2019-05-04T15:00:00.000Z",
                    "peepCreatedBy": "Marion Jung",
                    "username": "rainbow"
                },
                {
                    "_id": "5cc08495bf3fd62d03f2f4c8",
                    "peepMessage": "Enjoy the sunshine!",
                    "peepDateCreated": "2020-07-12T12:30:00.000Z",
                    "peepCreatedBy": "Alex Smith",
                    "username": "sunnydays"
                },
                {
                    "_id": "5cc08495bf3fd62d03f2f4c9",
                    "peepMessage": "Hello from across the globe!",
                    "peepDateCreated": "2021-02-20T18:45:00.000Z",
                    "peepCreatedBy": "Linda Thompson",
                    "username": "traveler"
                },
            ]
        });
    }
};

export default mockAxios;
