var config = {
    style: './map/style.json',
    showMarkers: true,
    markerColor: '#a41e35',
    inset: true, // if inset map is set to true, legend will be disabled.
    legend: false, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps. You will need to provide your own terrain tiles.
    useCustomLayers: true, //set true for enabling custom layers from sources.js
    bookmarks: true,
    chapterReturn: true,
    title: 'A tour of Temple University Campuses',
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Temple_University_Logo.svg/320px-Temple_University_Logo.svg.png",
    subtitle: 'Demo for the fall 2024 workshop',
    byline: 'By Felipe Valdez',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: source citations, etc.<br> Created using <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter1',
            alignment: 'left',
            hidden: false,
            title: 'Main Campus',
            image: './images/image1.jpg',
            caption: 'Charles Library Building',
            website: '<a href="https://temple.maps.arcgis.com/apps/MapSeries/index.html?appid=9b76db43c88946cfa92d269463ac26dd" target="https://temple.maps.arcgis.com/apps/MapSeries/index.html?appid=9b76db43c88946cfa92d269463ac26dd">Historical map</a>',
            //author: 'Felipe Valdez',
            //legend: '<span style="font-size: 0.85em;"><em>Legend content</em><br></span><img src="/images/legend1.png" style="display: block; margin-top: 10px; width: 100%; max-width: 200px;">',
            description: 'Temple’s bustling Main Campus crackles with energy, thanks to its location in the heart of Philadelphia, numerous new building projects and the 10,000 students who now live on or around our increasingly residential campus. On- and off-campus activities abound, including more than 300 student organizations; Division I sporting events; and nearby restaurants, shops and entertainment.',
            location: {
                center: [-75.15552, 39.98203],
                zoom: 16.57,
                pitch: 49,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: true,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                 {
                //     layer: 'pcwnet',
                //     opacity: 1,
                //     duration: 5000
                 }
                // {
                //      layer: 'countries-fill',
                //      opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter2',
            alignment: 'right',
            hidden: false,
            title: 'Ambler',
            image: './images/image2.png',
            website: '<a href="https://ambler.temple.edu/" target="https://ambler.temple.edu/">Learn more</a>',
            //legend: '<span style="font-size: 0.85em;"><em>Legend content</em><br></span><img src="/images/legend1.png" style="display: block; margin-top: 10px; width: 100%; max-width: 200px;">',
            description: 'Beloved by generations of Temple students for its scenic beauty and nationally acclaimed gardens, Temple’s Ambler Campus fosters a close-knit community of students and faculty. Ambler students enjoy the full range of services that the suburban campus of a world-class university provides.',
            location: {
                center: [-75.19169, 40.16554],
                zoom: 15.9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pcwnet',
                    opacity: 1
                }
           ],
           onChapterExit: [
               {
                   layer: 'pcwnet',
                   opacity: 0
               }
           ]
        },
        {
            id: 'chapter3',
            alignment: 'left',
            hidden: false,
            title: 'Center City',
            image: './images/image3.png',
            website: '<a href="https://universitycollege.temple.edu/center-city" target="https://universitycollege.temple.edu/center-city">Website</a>', 
            description: 'Temple University Center City (TUCC) offers the ideal learning environment for adult and continuing-education students who must often balance the demands of a career, family and school. Surrounded by the home offices of major national corporations and just across the street from Philadelphia’s City Hall. Additionally, TUCC is near many of the city’s cultural and entertainment resources. Classes are offered primarily in the evenings and on weekends.',
            location: {
                center: [-75.16602897661596, 39.95294851795492],
                zoom: 17,
                pitch: 52,
                bearing: -36.70
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
           onChapterExit: []
        },
        {
            id: 'chapter4',
            alignment: 'center',
            hidden: false,
            title: 'Health Sciences Center',
            image: './images/image4.png',
            website: '<a href="https://universitycollege.temple.edu/center-city" target="https://universitycollege.temple.edu/center-city">Website</a>', 
            description: 'Step onto the Health Sciences Center and be immersed in the future of healthcare. Home to four of Temple’s medical-related schools and colleges, as well as the nationally ranked Temple University Hospital, the Health Sciences Center is a hub of academic, clinical and research activities.',
            location: {
                center: [-75.15191, 40.00617],
                zoom: 16,
                pitch: 61.70,
                bearing: 61.70
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
            //     {
            //         layer: 'pcwnet',
            //         opacity: 1
            //     }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter5',
            alignment: 'right',
            hidden: false,
            title: 'Japan',
            image: './images/image5.jpg',
            website: '<a href="https://www.tuj.ac.jp/" target="https://www.tuj.ac.jp/">Website</a>', 
            description: 'The Temple T flies proudly over this campus, which is the oldest and largest foreign university in Japan. Temple University, Japan Campus, takes pride in the top-quality, English-language education it offers. It also provides a unique opportunity for thousands of students from nearly 60 countries to earn American undergraduate and graduate degrees.',
            location: {
                center: [139.67390, 35.64250],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
            //     {
            //         layer: 'pcwnet',
            //         opacity: 1
            //     }
            ],
            onChapterExit: []
        }, 
        {
            id: 'chapter6',
            alignment: 'left',
            hidden: false,
            title: 'Rome',
            image: './images/image6.jpg',
            website: '<a href="https://studyabroad.temple.edu/programs/temple-university-rome/semester-academic-year-summer" target="https://studyabroad.temple.edu/programs/temple-university-rome/semester-academic-year-summer">Website</a>', 
            description: 'Housed in a historic, light-filled villa on the banks of the Tiber River, Temple Rome immerses students in the richness of Italian culture. An eclectic faculty, frequent field trips, small class sizes and internship opportunities provide students with an unforgettable study-abroad experience',
            location: {
                center: [12.48254, 41.90687],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
            //     {
            //         layer: 'pcwnet',
            //         opacity: 1
            //     }
            ],
            onChapterExit: []
        }, 
        {
            id: 'chapter7',
            alignment: 'center',
            hidden: false,
            title: 'Workshop',
            image: './images/image7.png',
            //website: '<a href="https://studyabroad.temple.edu/programs/temple-university-rome/semester-academic-year-summer" target="https://studyabroad.temple.edu/programs/temple-university-rome/semester-academic-year-summer">Website</a>', 
            description: 'Do you want to learn how to create your own story map like this? Visit our hands on <a href="https://studyabroad.temple.edu/programs/temple-university-rome/semester-academic-year-summer" target="https://studyabroad.temple.edu/programs/temple-university-rome/semester-academic-year-summer">online tutorial.</a>',
            location: {
                center: [-75.15515, 39.98185],
                zoom:2.27,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
            //     {
            //         layer: 'pcwnet',
            //         opacity: 1
            //     }
            ],
            onChapterExit: []
        }
    ]
};
