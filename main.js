const array = [

    {

        //first object

        "id": "1",

        "name": "google",

        "url": "www.google.com",

        "subData": [

            {

                "id": "2",

                "name": "walla",

                "url": "www.walla.co.il"

            },

            {

                "id": "3",

                "name": "ynet",

                "url": "www.ynet.co.il",

                "subData": [

                    {

                        "id": "4",

                        "name": "mako",

                        "url": "www.mako.co.il"

                    },

                    {

                        "id": "5",

                        "name": "google",

                        "url": "www.google.com"

                    },

                    {

                        "id": "6",

                        "name": "walla",

                        "url": "www.walla.co.il"

                    }

                ]

            },

            {

                "id": "7",

                "name": "google",

                "url": "www.google.com"

            }

        ]

    },

    //second object
    {

        "id": "8",

        "name": "ynet",

        "url": "www.ynet.co.il",

        "subData": [

            {

                "id": "9",

                "name": "walla",

                "url": "www.walla.co.il"

            },

            {

                "id": "10",

                "name": "google",

                "url": "www.google.com",

                "subData": [

                    {

                        "id": "11",

                        "name": "ynet",

                        "url": "www.ynet.co.il",

                        "subData": [

                            {

                                "id": "12",

                                "name": "walla",

                                "url": "www.walla.co.il"

                            },

                            {

                                "id": "13",

                                "name": "google",

                                "url": "www.google.com"

                            },

                            {

                                "id": "14",

                                "name": "mako",

                                "url": "www.mako.co.il"

                            }

                        ]

                    },

                    {

                        "id": "15",

                        "name": "google",

                        "url": "www.google.com"

                    },

                    {

                        "id": "16",

                        "name": "mako",

                        "url": "www.mako.co.il"

                    }

                ]

            },

            {

                "id": "17",

                "name": "walla",

                "url": "www.walla.co.il",

                "subData": [

                    {

                        "id": "18",

                        "name": "ynet",

                        "url": "www.ynet.co.il"

                    },

                    {

                        "id": "19",

                        "name": "google",

                        "url": "www.google.com"

                    },

                    {

                        "id": "20",

                        "name": "walla",

                        "url": "www.walla.co.il"

                    }

                ]

            },

            {

                "id": "21",

                "name": "mako",

                "url": "www.mako.co.il"

            }

        ]

    }

]


let view = document.querySelector('.build_view');
//recursive solution
function buildTree(array) {
    let arrayData = [];
    array.forEach((item, index) => {
        arrayData.push(`<div class="tree">
        <div class="list_data">
        <span>Id: ${array[index].id}</span>
        <span>Site Name:${array[index].name}</span>
        <span><a href='https://${array[index].url}'>Site Url:${array[index].name}</a></span>
        </div>
        ${array[index].subData ? buildTree(array[index].subData) : ''} 
        </div>`)
    });
    return arrayData.join('');
}

view.innerHTML = buildTree(array);
