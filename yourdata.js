export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'Jernice Duncan',
        headerTagline: [//Line 1 For Header
                       'Web Developer', 
                        //Line 2 For Header
                        'Front End Developer',
                        //Line 3 For Header
                        'Back End Developer'
    ],
        //Contact Email
        contactEmail:'jerniceduncan@icloud.com',
        // Add Your About Text Here
        abouttext: "I am a Full Stack Developer, skilled in React, Redux, Mongo DB, MySql, Node.js",
        aboutImage:'./../public/images/IMG_1066.jfif',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'Code Quiz', //Project Title - Add Your Project Title Here
             service:'JavaScript', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:"../public/images/codequiz.png",
             //Project URL - Add Your Project Url Here
             url:'https://jerniceduncan.github.io/04-Code-quiz/'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'React Google Book Search',
                service: 'React',
                imageSrc: "../public/images/React Google Books Search.gif",
                url: 'https://google-books-react-search-21.herokuapp.com/'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Job-TrackR',
                service: 'Redux',
                imageSrc: "../public/images/Jobtrackr.png",
                url: 'https://shahidlashari.github.io/Job-TrackR/'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Blog',
                service: 'Web Development',
                imageSrc: "../public/images/image(1).png",
                url: 'https://project02blog.herokuapp.com/'
           }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/jerniceduncan'},
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/jerniceduncan'
            }

        ]
    }