require([
    "esri/config",
    "esri/Map", 
    "esri/views/MapView",
    "esri/widgets/BasemapToggle",
    "esri/widgets/Track",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"

], function (esriConfig,Map, MapView, BasemapToggle,Track, Graphic, GraphicsLayer) {

const map = new Map({
    basemap: "arcgis-navigation"
});

// we set the map to Rexburg
const view = new MapView({
  map: map,
  center: [-111.79208, 43.82315], // Longitude, latitude
  zoom: 13, // Zoom level
  container: "viewDiv" // Div element
});

// we display the map
const graphicsLayer = new GraphicsLayer();
map.add(graphicsLayer);


// create marker
const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [255,0,0],
    outline: {
        color: [0,0,0],
        width: 1
    }
};

// create popup 
const popupTemplate = {
    title: "{Name}",
    content: "{Description}"
}

// wendys Point
const wendysPoint = {  
    type: "point",
    longitude: -111.80933211356773,
    latitude: 43.802450556654186
};

// wendys info
const wendysInfo = {
    Name: "Wendy's",
    Description: "Fast-food burger chain serving sides such as chili & baked potatoes.\n\n" + 
    "Hours:\nMonday    6:30AM – 11PM\n" + 
    "       Tuesday   6:30AM – 11PM\n" +
    "       Wednesday 6:30AM – 11PM\n" +
    "       Thursday  6:30AM – 11PM\n" +
    "       Friday    6:30AM – 12AM\n" +
    "       Saturday  6:30AM – 12PM\n" +
    "       Sunday    8:00AM – 10PM\n"                      
}
// wendy's graphic
const wendys = new Graphic({
    geometry: wendysPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: wendysInfo,
    popupTemplate: popupTemplate
 });
 

 // mcDonalds Point
const mcPoint = {
    type: "point",
    longitude: -111.80808528014829,
    latitude: 43.80406992539757
};

// mcDonalds info
const mcInfo = {
    Name: "McDonald's",
    Description: "Classic, long-running fast-food chain known for its burgers & fries.\n\n" +
    "       Hours:\nMonday   Open 24 hours\n" + 
    "       Tuesday   Open 24 hours\n" +
    "       Wednesday Open 24 hours\n" +
    "       Thursday  Open 24 hours\n" +
    "       Friday    Open 24 hours\n" +
    "       Saturday  Open 24 hours\n" +
    "       Sunday    Open 24 hours\n"                      
}
// mcDonalds graphic
const mc = new Graphic({
    geometry: mcPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: mcInfo,
    popupTemplate: popupTemplate
});

// Porter Park
const porterParkPoint = {  
    type: "point",
    longitude: -111.79101113309284, //43.823006963363305, -111.79101113309284
    latitude: 43.823006963363305
};

// Porter Park info
const porterInfo = {
    Name: "Porter Park",
    Description: "Leafy green space featuring an open field, playground & spray park, plus an old carousel.\n\n" + 
    "Hours:\nMonday   5:00AM – 10PM\n" + 
    "       Tuesday   5:00AM – 10PM\n" +
    "       Wednesday 5:00AM – 10PM\n" +
    "       Thursday  5:00AM – 10PM\n" +
    "       Friday    5:00AM – 10PM\n" +
    "       Saturday  5:00AM – 10PM\n" +
    "       Sunday    5:00AM – 10PM\n"                      
}
// Porter Park graphic
const porterPark = new Graphic({
    geometry: porterParkPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: porterInfo,
    popupTemplate: popupTemplate
 });

// Smith Park Point
const smithParkPoint = {  
    type: "point",
    longitude: -111.77395656678152, 
    latitude: 43.82679965074743
};

// Smith Park info
const smithInfo = {
    Name: "Smith Park",
    Description: "Smith Park was donated to the City of Rexburg by the Church of Jesus Christ of Latter-day Saints and was a church welfare farm before becoming a City Park.\n\n" + 
    "Hours:\nMonday   Open 24 hours\n" + 
    "       Tuesday   Open 24 hours\n" +
    "       Wednesday Open 24 hours\n" +
    "       Thursday  Open 24 hours\n" +
    "       Friday    Open 24 hours\n" +
    "       Saturday  Open 24 hours\n" +
    "       Sunday    Open 24 hours\n"                       
}
// Smith Park graphic
const smithPark = new Graphic({
    geometry: smithParkPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: smithInfo,
    popupTemplate: popupTemplate
 });

// Nature Park Point
const natureParkPoint = {  
    type: "point",
    longitude: -111.80126035504362, //43.834365462801294, -111.80126035504362
    latitude: 43.834365462801294
};

// Nature Park info
const natureInfo = {
    Name: "Nature Park",
    Description: "Roomy park with a tranquil atmosphere featuring a disc golf course, running path & fishing ponds.\n\n" + 
    "Hours:\nMonday   6:00AM – 11PM\n" + 
    "       Tuesday   6:00AM – 11PM\n" +
    "       Wednesday 6:00AM – 11PM\n" +
    "       Thursday  6:00AM – 11PM\n" +
    "       Friday    6:00AM – 11PM\n" +
    "       Saturday  6:00AM – 11PM\n" +
    "       Sunday    6:00AM – 11PM\n"                      
}
// Nature Park graphic
const naturePark = new Graphic({
    geometry: natureParkPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: natureInfo,
    popupTemplate: popupTemplate
 });

// Burger King Point
const burgerKingPoint = {  
    type: "point",
    longitude: -111.81166408781593, //43.804951943131414, -111.81166408781593
    latitude: 43.804951943131414
};

// Burger King info
const burgerKingInfo = {
    Name: "Burger King",
    Description: "Well-known fast-food chain serving grilled burgers, fries & shakes.\n\n" + 
    "Hours:\nMonday   7:00AM – 11PM\n" + 
    "       Tuesday   7:00AM – 11PM\n" +
    "       Wednesday 7:00AM – 11PM\n" +
    "       Thursday  7:00AM – 11PM\n" +
    "       Friday    7:00AM – 11PM\n" +
    "       Saturday  7:00AM – 11PM\n" +
    "       Sunday    7:00AM – 11PM\n"                      
}
// Burger King graphic
const burgerKing = new Graphic({
    geometry: burgerKingPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: burgerKingInfo,
    popupTemplate: popupTemplate
 });

 // Fat Cats Point
const fatCatsPoint = {  
    type: "point",
    longitude: -111.78054070758064, //43.83611458947897, -111.78054070758064
    latitude: 43.83611458947897
};

// Fat Cats info
const fatCatsInfo = {
    Name: "Fat Cats Rexburg",
    Description: "Entertainment center features bowling, glow golf, arcade games & a movie theater, plus food & drink.\n\n" + 
    "rexburg.fatcatsfun.com"                  
}
// Fat Cats graphic
const fatCats = new Graphic({
    geometry: fatCatsPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: fatCatsInfo,
    popupTemplate: popupTemplate
 });

 // Paramount 5 Point
const paramount5Point = {  
    type: "point",
    longitude: -111.7841843413656, //43.82520806811196, -111.7841843413656
    latitude: 43.82520806811196
};

// Paramount 5 info
const paramount5Info = {
    Name: "Paramount 5",
    Description: "Bargain movie theater screening second-run films & offering standard concessions.\n\n" + 
    "www.rexburgmovies.com"                  
}
// Paramount 5 graphic
const paramount5 = new Graphic({
    geometry: paramount5Point,
    symbol: simpleMarkerSymbol, 
   
    attributes: paramount5Info,
    popupTemplate: popupTemplate
 });

// Upper Fields Point 
const upperFieldsPoint = {  
    type: "point",
    longitude: -111.78464731769745, //43.81054226696074, -111.78464731769745
    latitude: 43.81054226696074
};

// Upper Fields info
const upperFieldsInfo = {
    Name: "BYUI Upper Fields",
    Description: "Outdoor space featuring three outdoor lighted turf playing fields and a ropes course."                  
}
// Upper Fields graphic
const upperFields = new Graphic({
    geometry: upperFieldsPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: upperFieldsInfo,
    popupTemplate: popupTemplate
 });
 
// I Center Point
const iCenterPoint = {  
    type: "point",
    longitude: -111.78538447361676, //43.819399963869024, -111.78538447361676
    latitude: 43.819399963869024
};

// I Center info
const iCenterInfo = {
    Name: "BYU-Idaho I-Center",
    Description: "The I-Center courts are a collection of 10 multi-use courts. These multi use courts are lined for basketball, volleyball, tennis, and futsal."                  
}
// I Center graphic
const iCenter = new Graphic({
    geometry: iCenterPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: iCenterInfo,
    popupTemplate: popupTemplate
});

// Cafe Rio Point
const cafeRioPoint = {  
    type: "point",
    longitude: -111.7862100912519, //43.82203883289274, -111.7862100912519
    latitude: 43.82203883289274
};

// Cafe Rio info
const cafeRioInfo = {
    Name: "Cafe Rio Mexican Grill",
    Description: "Counter-serve eatery dishing up Mexican classics including hand-rolled tortillas, burritos & tacos.\n\n" + 
    "Hours:\nMonday   10:30AM – 10PM\n" + 
    "       Tuesday   10:30AM – 10PM\n" +
    "       Wednesday 10:30AM – 10PM\n" +
    "       Thursday  10:30AM – 10PM\n" +
    "       Friday    10:30AM – 10PM\n" +
    "       Saturday  10:30AM – 10PM\n" +
    "       Sunday    Closed\n"                      
}
// Cafe Rio graphic
const cafeRio = new Graphic({
    geometry: cafeRioPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: cafeRioInfo,
    popupTemplate: popupTemplate
});

// MC point
const mCenterPoint = {  
    type: "point",
    longitude: -111.78240336572622, //43.81851625202728, -111.78240336572622
    latitude: 43.81851625202728
};

// MC info
const mCenterInfo = {
    Name: "Hyrum Manwaring Student Center",
    Description: "Services: Food, Laser Tag, Home Evening groups activities, bowling, ballroom, roller skating.\n\n"                    
}
// MC graphic
const mCenter = new Graphic({
    geometry: mCenterPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: mCenterInfo,
    popupTemplate: popupTemplate
});

// Costa Vida Point
const costaVidaPoint = {  
    type: "point",
    longitude: -111.778852663715, //43.83661324081155, -111.778852663715
    latitude: 43.83661324081155
};

// Costa Vida info
const costaVidaInfo = {
    Name: "Costa Vida",
    Description: "Laid-back counter-serve Mexican chain with Baja-style tacos & burritos, plus gluten-free options.\n\n" +                   
    "Hours:\nMonday   11:00AM – 9PM\n" + 
    "       Tuesday   11:00AM – 9PM\n" +
    "       Wednesday 11:00AM – 9PM\n" +
    "       Thursday  11:00AM – 9PM\n" +
    "       Friday    11:00AM – 10PM\n" +
    "       Saturday  11:00AM – 10PM\n" +
    "       Sunday    Closed\n" 
}
// Costa Vida graphic
const costaVida = new Graphic({
    geometry: costaVidaPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: costaVidaInfo,
    popupTemplate: popupTemplate
});

// Mandarin Point
const mandarinPoint = {  
    type: "point",
    longitude: -111.77727504792982, //43.84006120791653, -111.77727504792982
    latitude: 43.84006120791653
};

// Mandarin info
const mandarinInfo = {
    Name: "Mandarin Restaurant",
    Description: "Chinese Restaurant.\n\n" +                   
    "Hours:\nMonday   11:00AM – 9PM\n" + 
    "       Tuesday   11:00AM – 9PM\n" +
    "       Wednesday 11:00AM – 9PM\n" +
    "       Thursday  11:00AM – 9PM\n" +
    "       Friday    11:00AM – 9:30PM\n" +
    "       Saturday  11:00AM – 9:30PM\n" +
    "       Sunday    Closed\n" 
}
// Mandarin graphic
const mandarin = new Graphic({
    geometry: mandarinPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: mandarinInfo,
    popupTemplate: popupTemplate
});

// Domino's Point
const dominosPoint = {  
    type: "point",
    longitude: -111.78859220921916, //43.82569280287194, -111.78859220921916
    latitude: 43.82569280287194
};

// Domino's info
const dominosInfo = {
    Name: "Domino's Pizza",
    Description: "Delivery/carryout chain offering a wide range of pizzas & a variety of other dishes & sides.\n\n" +                   
    "Hours:\nMonday   10:30AM – 12AM\n" + 
    "       Tuesday   10:30AM – 12AM\n" +
    "       Wednesday 10:30AM – 12AM\n" +
    "       Thursday  10:30AM – 12AM\n" +
    "       Friday    10:30AM – 1AM\n" +
    "       Saturday  10:30AM – 1AM\n" +
    "       Sunday    10:30AM – 12AM\n"
}
// Domino's graphic
const dominos = new Graphic({
    geometry: dominosPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: dominosInfo,
    popupTemplate: popupTemplate
});

// Kiwi Loco Point
const kiwiLocoPoint = {  
    type: "point",
    longitude: -111.78796795047967, //43.822062566580804, -111.78796795047967
    latitude: 43.822062566580804
};

// Kiwi Loco info
const kiwiLocoInfo = {
    Name: "Kiwi Loco Yogurt",
    Description: "Frozen Yogurt Shop.\n\n" +                   
    "Hours:\nMonday   12PM – 12AM\n" + 
    "       Tuesday   12PM – 12AM\n" +
    "       Wednesday 12PM – 12AM\n" +
    "       Thursday  12PM – 12AM\n" +
    "       Friday    12PM – 12AM\n" +
    "       Saturday  12PM – 12AM\n" +
    "       Sunday    Closed\n"
}
// Kiwi Loco graphic
const kiwiLoco = new Graphic({
    geometry: kiwiLocoPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: kiwiLocoInfo,
    popupTemplate: popupTemplate
});

// Five Guys Point
const fiveGuysPoint = {  
    type: "point",
    longitude: -111.7889804488688, //43.8217128869458, -111.7889804488688
    latitude: 43.8217128869458
};

// Five Guys info
const fiveGuysInfo = {
    Name: "Five Guys",
    Description: "Fast-food chain with made-to-order burgers, fries & hot dogs, plus free peanuts while you wait.\n\n" +                   
    "Hours:\nMonday   11AM – 10PM\n" + 
    "       Tuesday   11AM – 10PM\n" +
    "       Wednesday 11AM – 10PM\n" +
    "       Thursday  11AM – 10PM\n" +
    "       Friday    11AM – 10PM\n" +
    "       Saturday  11AM – 10PM\n" +
    "       Sunday    11AM - 10PM\n"
}
// Five Guys graphic
const fiveGuys = new Graphic({
    geometry: fiveGuysPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: fiveGuysInfo,
    popupTemplate: popupTemplate
});

// Dairy Queen Point
const dairyPoint = {  
    type: "point",
    longitude: -111.77760860624808, //43.83354679737788, -111.77760860624808
    latitude: 43.83354679737788
};

// Dairy Queen info
const dairyInfo = {
    Name: "Dairy Queen Grill & Chill",
    Description: "Soft-serve ice cream & signature shakes top the menu at this classic burger & fries fast-food chain.\n\n" +                   
    "Hours:\nMonday   10AM – 11PM\n" + 
    "       Tuesday   10AM – 11PM\n" +
    "       Wednesday 10AM – 11PM\n" +
    "       Thursday  10AM – 11PM\n" +
    "       Friday    10AM – 12AM\n" +
    "       Saturday  10AM – 12AM\n" +
    "       Sunday    12PM - 9PM\n"
}
// Dairy Queen graphic
const dairy = new Graphic({
    geometry: dairyPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: dairyInfo,
    popupTemplate: popupTemplate
});

// Subway Point
const subwayPoint = {  
    type: "point",
    longitude: -111.78882021547241, //43.817957894198166, -111.78882021547241
    latitude: 43.817957894198166
};

// Subway info
const subwayInfo = {
    Name: "Subway",
    Description: "Serving fresh subs, sandwiches, salads, & more\n\n" +                   
    "Hours:\nMonday   8AM – 10:30PM\n" + 
    "       Tuesday   8AM – 10:30PM\n" +
    "       Wednesday 8AM – 10:30PM\n" +
    "       Thursday  8AM – 10:30PM\n" +
    "       Friday    8AM – 10:30PM\n" +
    "       Saturday  8AM – 10:30PM\n" +
    "       Sunday    Closed\n"
}
// Subway graphic
const subway = new Graphic({
    geometry: subwayPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: subwayInfo,
    popupTemplate: popupTemplate
});

// SodaVine Point
const sodaPoint = {  
    type: "point",
    longitude: -111.78991552420725, //43.82493742497825, -111.78991552420725
    latitude: 43.82493742497825
};

// SodaVine info
const sodaInfo = {
    Name: "SodaVine",
    Description: "Soda & treats shop with 3 locations in Idaho, serving sodas, mixed drinks, custards, pretzels, cookies, and more.\n\n" +                   
    "Hours:\nMonday   9AM – 11:00PM\n" + 
    "       Tuesday   9AM – 11:00PM\n" +
    "       Wednesday 9AM – 11:00PM\n" +
    "       Thursday  9AM – 11:00PM\n" +
    "       Friday    9AM – 12:00AM\n" +
    "       Saturday  9AM – 11:00PM\n" +
    "       Sunday    Closed\n"
}
// SodaVine graphic
const sodaVine = new Graphic({
    geometry: sodaPoint,
    symbol: simpleMarkerSymbol, 
   
    attributes: sodaInfo,
    popupTemplate: popupTemplate
});

// Display points on the screen
graphicsLayer.add(wendys);
graphicsLayer.add(mc);
graphicsLayer.add(porterPark);
graphicsLayer.add(smithPark)
graphicsLayer.add(naturePark)
graphicsLayer.add(burgerKing)
graphicsLayer.add(fatCats)
graphicsLayer.add(paramount5)
graphicsLayer.add(upperFields)
graphicsLayer.add(iCenter)
graphicsLayer.add(cafeRio)
graphicsLayer.add(mCenter)
graphicsLayer.add(costaVida)
graphicsLayer.add(mandarin)
graphicsLayer.add(dominos)
graphicsLayer.add(kiwiLoco)
graphicsLayer.add(fiveGuys)
graphicsLayer.add(dairy)
graphicsLayer.add(subway)
graphicsLayer.add(sodaVine)

// Change Map type
const basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "arcgis-imagery"
});

view.ui.add(basemapToggle,"bottom-right");

// Go to user's current location
const track = new Track({
    view: view,
    graphic: new Graphic({
        symbol: {
            type: "simple-marker",
            size: "12px",
            color: "blue",
            outline: {
                color: "#efefef",
                width: "1.5px"
            }
        }
    }),
    useHeadingEnabled: false
});
view.ui.add(track, "top-left");

});