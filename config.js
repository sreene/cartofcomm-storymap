var config = {
    style: './map/style.json',
    showMarkers: true,
    markerColor: 'green',
    inset: false, // if inset map is set to true, legend will be disabled.
    legend: true, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps. You will need to provide your own terrain tiles.
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: false,
    chapterReturn: true,
    title: 'My first StoryMap',
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
            title: 'Slide 1',
            image: './images/image1.png',
            caption: 'A caption for your image',
            website: '<a href="" target="_blank">Website</a>',
            author: 'Felipe Valdez',
            //legend: '<span style="font-size: 0.85em;"><em>Legend content</em><br></span><img src="/images/legend1.png" style="display: block; margin-top: 10px; width: 100%; max-width: 200px;">',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            alignment: 'left',
            hidden: false,
            title: 'Second slide',
            image: './images/image2.png',
            legend: '<span style="font-size: 0.85em;"><em>Legend content</em><br></span><img src="/images/legend1.png" style="display: block; margin-top: 10px; width: 100%; max-width: 200px;">',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-75.13331, 39.98741],
                zoom: 15,
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
            alignment: 'right',
            hidden: false,
            title: 'Third slide',
            image: './images/image2.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-75.13331, 39.98741],
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
        }
    ]
};
