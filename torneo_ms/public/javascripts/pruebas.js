"use strict";

module.exports = {
    get_tematicas: function (id) {
        const tematicas = [
                {
                "_id": "63df1c4afd28d9a46c39d79b",
                "name": "Geography",
                "createdAt": "2023-02-05T03:02:34.670Z",
                "updatedAt": "2023-02-07T03:02:34.690Z"
                },
            {
                "_id": "63df1c4afd28d9a46c39d79b",
                "name": "Tema 2",
                "createdAt": "2023-02-05T03:02:34.670Z",
                "updatedAt": "2023-02-07T03:02:34.690Z"
                }
        ];

        var tematica_info;
        
        tematicas.forEach(tem => {
            if(tem._id == id){
                tematica_info =  tem
            }
            else{
                tematica_info =  "No encontrado"
            }
        })
        return tematica_info;
    },
    get_preguntas: function () {
        const questions =  [
            {
                "theme": "Geography",
                "question": "What are the five oceans of the world?",
                "answers": [
                    "Pacific Ocean",
                    "Atlantic Ocean",
                    "Indian Ocean",
                    "Southern Ocean",
                    "Arctic Ocean"
                ]
            },
            {
                "theme": "History",
                "question": "Who was the first president of the United States?",
                "answers": [
                    "George Washington",
                    "Atlantic Ocean",
                    "Indian Ocean",
                    "Southern Ocean",
                    "Arctic Ocean"
                ]
            },
            {
                "theme": "Science",
                "question": "What is the chemical symbol for water?",
                "answers": [
                    "H2O",
                    "Atlantic Ocean",
                    "Indian Ocean",
                    "Southern Ocean",
                    "Arctic Ocean"
                ]
            }
        ];          
    }
}