'use strict';

angular.module('navigatorGlassMock', ['ngMockE2E'])
    .run(function($httpBackend) {
        var timelineResponse = [{"id":"6129c8c0-f4a8-43b1-bb9a-d7e80346ae09","deliveryTime":null,"etag":"1414456570788","kind":"mirror#timelineItem","speakableText":"Sample Speakable Text","html":"\r\n  <article>\r\n    <figure>\r\n      <img src=\"https://farm8.staticflickr.com/7324/12329610463_4956c48c54.jpg\" width=\"240\" height=\"360\">\r\n    </figure>\r\n    <section>\r\n      <h2>Authority</h2>\r\n      <h3 class=\"green\">New York County Courthouse</h3>\r\n      <strong>240x360</strong>\r\n    </section>\r\n  </article>\r\n","created":"2014-10-28T00:36:10.788+00:00","selfLink":"https://www.googleapis.com/mirror/v1/timeline/6129c8c0-f4a8-43b1-bb9a-d7e80346ae09","updated":"2014-10-28T00:36:10.788+00:00","title":"2 Column Card","isBundleCover":true,"bundleId":"1","location":{"id":null,"accuracy":null,"address":null,"latitude":null,"longitude":null,"timestamp":null},"menuItems":[{"id":"0002","action":"TOGGLE_PINNED"},{"id":"0003","action":"DELETE"},{"id":"1001","action":"CUSTOM","displayName":"Custom Item A","state":"DEFAULT","iconUrl":"https://mirror-api-playground.appspot.com/links/icons_30_0000_blue.png"},{"id":"1002","action":"CUSTOM","displayName":"Custom Item B","state":"DEFAULT","iconUrl":"https://mirror-api-playground.appspot.com/links/icons_30_0001_green.png"},{"id":"1003","action":"CUSTOM","displayName":"Custom Item C","state":"DEFAULT","iconUrl":"https://mirror-api-playground.appspot.com/links/icons_30_0003_red.png"},{"id":"0001","action":"READ_ALOUD"}]}];
        var templateResponse = [{"id":"00000000-0000-0000-0000-000000000001","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article>\r\n    <figure>\r\n      <img\r\n        src=\"https://farm8.staticflickr.com/7324/12329610463_4956c48c54.jpg\"\r\n        width=\"240\"\r\n        height=\"360\" />\r\n    </figure>\r\n    <section>\r\n      <h2>Authority</h2>\r\n      <h3\r\n        class=\"green\">New York County Courthouse</h3>\r\n      <strong>240x360</strong>\r\n    </section>\r\n  </article>\r\n</content>","title":"2 Column Card","isBundleCover":true,"bundleId":"1","menuItems":[{"id":"0003","action":"DELETE"},{"id":"1001","action":"CUSTOM"},{"id":"1002","action":"CUSTOM"},{"id":"1003","action":"CUSTOM"}]},{"id":"00000000-0000-0000-0000-000000000002","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article>\r\n    <figure>\r\n      <img\r\n        src=\"https://farm3.staticflickr.com/2854/12142641925_9f45d75771.jpg\"\r\n        width=\"240\"\r\n        height=\"360\" />\r\n    </figure>\r\n    <section>\r\n      <h2>Welding Court</h2>\r\n      <h4\r\n        class=\"green\">Queens NYC</h4>\r\n      <strong>240x360</strong>\r\n    </section>\r\n  </article>\r\n</content>","title":"240x360","bundleId":"nycwayfinding:weldingcourt"},{"id":"00000000-0000-0000-0000-000000000003","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article>\r\n    <figure>\r\n      <img\r\n        src=\"https://farm4.staticflickr.com/3696/12214271043_751e71ab90.jpg\"\r\n        width=\"180\"\r\n        height=\"240\" />\r\n    </figure>\r\n    <section>\r\n      <h3>Burnett Memorial Fountain</h3>\r\n      <h4\r\n        class=\"green\">Central Park</h4>\r\n      <strong>180w x 240h</strong>\r\n    </section>\r\n  </article>\r\n</content>","title":"2 Column Card","bundleId":null,"menuItems":[{"id":"0002","action":"TOGGLE_PINNED"},{"id":"1002","action":"CUSTOM"}]},{"id":"00000000-0000-0000-0000-000000000004","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article>\r\n    <figure>\r\n      <img\r\n        src=\"https://farm4.staticflickr.com/3774/12214256833_b6ce25a822.jpg\"\r\n        width=\"240\"\r\n        height=\"180\" />\r\n    </figure>\r\n    <section>\r\n      <h2>Untermeyer Fountain</h2>\r\n      <h4>Central Park</h4>\r\n    </section>\r\n    <footer>\r\n      <p>Explore Conservatory Garden</p>\r\n    </footer>\r\n  </article>\r\n</content>","title":"Photo Overlay","bundleId":null,"menuItems":[{"id":"0003","action":"DELETE"},{"id":"0002","action":"TOGGLE_PINNED"}]},{"id":"00000000-0000-0000-0000-000000000005","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article>\r\n    <figure>\r\n      <img\r\n        src=\"http://farm2.static.flickr.com/1067/5109155598_8040a7e639_m.jpg\"\r\n        width=\"240\"\r\n        height=\"180\" />\r\n      <img\r\n        src=\"glass://map?w=240&amp;h=360&amp;marker=0;40.742756556471400,-73.987664119628400&amp;marker=1\"\r\n        width=\"240\"\r\n        height=\"360\" />\r\n    </figure>\r\n    <section>\r\n      <h2>Admiral David Glasgow Farragut</h2>\r\n      <h4>Madison Square Park</h4>\r\n    </section>\r\n  </article>\r\n</content>","title":"2 Column Photo w/Map Card","bundleId":null,"menuItems":[{"id":"0003","action":"DELETE"},{"id":"0002","action":"TOGGLE_PINNED"},{"id":"1001","action":"CUSTOM"},{"id":"1002","action":"CUSTOM"}]},{"id":"00000000-0000-0000-0000-000000000006","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article>\r\n    <section>\r\n      <div\r\n        class=\"layout-two-column\">\r\n        <div>\r\n          <h2\r\n            class=\"yellow\">Chipotle</h2>\r\n          <p>7003 SW Nyberg St Tualatin, OR USA</p>\r\n        </div>\r\n        <div>\r\n          <h2\r\n            class=\"blue\">El Sol</h2>\r\n          <p>7028 SW Nyberg St Tualatin, OR USA</p>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <footer>\r\n      <p>Mexican</p>\r\n    </footer>\r\n  </article>\r\n</content>","title":"2 Column Card","bundleId":null,"menuItems":[{"id":"0003","action":"DELETE"}]},{"id":"00000000-0000-0000-0000-000000000007","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article>\r\n    <figure>\r\n      <img\r\n        src=\"http://farm5.static.flickr.com/4093/4943355401_cc4c88a149_m.jpg\"\r\n        width=\"240\"\r\n        height=\"360\" />\r\n    </figure>\r\n    <section>\r\n      <h2>Lajos Kossuth</h2>\r\n      <table\r\n        class=\"text-small align-justify no-border\">\r\n        <tbody>\r\n          <tr>\r\n            <td\r\n              class=\"muted\">Born</td>\r\n            <td>Oct 2, 1802</td>\r\n          </tr>\r\n          <tr>\r\n            <td\r\n              class=\"muted\">Died</td>\r\n            <td>Mar 20, 1894</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </section>\r\n  </article>\r\n</content>","title":"2 Column - Table","bundleId":null,"menuItems":[{"id":"0003","action":"DELETE"},{"id":"1001","action":"CUSTOM"}]},{"id":"00000000-0000-0000-0000-000000000008","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article\r\n    class=\"photo\">\r\n    <img\r\n      src=\"http://d1c739w2xm33i4.cloudfront.net/2.2/top_image.jpg\"\r\n      width=\"100%\"\r\n      height=\"100%\" />\r\n    <div\r\n      class=\"photo-overlay\"></div>\r\n    <section>\r\n      <p\r\n        class=\"text-auto-size\">Compliments of Lunch Roulette</p>\r\n    </section>\r\n  </article>\r\n</content>","title":"Photo Overlay","bundleId":null,"menuItems":[{"id":"0003","action":"DELETE"},{"id":"0002","action":"TOGGLE_PINNED"},{"id":"1001","action":"CUSTOM"},{"id":"1002","action":"CUSTOM"}]},{"id":"00000000-0000-0000-0000-000000000009","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article>\r\n    <figure>\r\n      <img\r\n        src=\"glass://map?w=240&amp;h=360&amp;marker=0;40.7045,-73.9954&amp;marker=1\"\r\n        width=\"240\"\r\n        alt=\"{{lat}}, {{lon}}\"\r\n        height=\"360\" />\r\n    </figure>\r\n    <section>\r\n      <h2\r\n        class=\"yellow\">${{ title }}</h2>\r\n      <strong>${{ featureKey }}</strong>\r\n    </section>\r\n  </article>\r\n</content>","title":"2 Column - Template","bundleId":null},{"id":"00000000-0000-0000-0000-000000000010","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article\r\n    class=\"cover-only\">\r\n    <section>\r\n      <p\r\n        class=\"text-auto-size\">This is the cover card of a long list</p>\r\n    </section>\r\n    <footer>\r\n      <p>Hover to scroll</p>\r\n    </footer>\r\n  </article>\r\n  <article\r\n    class=\"auto-paginate\">\r\n    <ul\r\n      class=\"text-x-small\">\r\n      <li>First item</li>\r\n      <li>Second item</li>\r\n      <li>Third item</li>\r\n      <li>Fourth item</li>\r\n      <li>Fifth item</li>\r\n      <li>Sixth item</li>\r\n      <li>Seventh item</li>\r\n      <li>Eighth item</li>\r\n      <li>Ninth item</li>\r\n      <li>Tenth item</li>\r\n    </ul>\r\n  </article>\r\n</content>","title":"3 Column Card","bundleId":null,"menuItems":[{"id":"0003","action":"DELETE"},{"id":"0002","action":"TOGGLE_PINNED"}]},{"id":"00000000-0000-0000-0000-000000000011","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article>\r\n    <figure>\r\n      <img\r\n        src=\"http://farm2.static.flickr.com/1067/5109155598_8040a7e639_m.jpg\"\r\n        width=\"240\"\r\n        height=\"180\" />\r\n    </figure>\r\n    <section>\r\n      <h2>Admiral David Glasgow Farragut</h2>\r\n      <h4>Madison Square Park</h4>\r\n    </section>\r\n  </article>\r\n</content>","title":"Photo Overlay","bundleId":null,"menuItems":[{"id":"0003","action":"DELETE"},{"id":"0002","action":"TOGGLE_PINNED"}]},{"id":"00000000-0000-0000-0000-000000000013","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article>\r\n    <section>\r\n      <h1\r\n        class=\"text-auto-size\">List of Lunch Roulette Cuisines</h1>\r\n    </section>\r\n  </article>\r\n  <article\r\n    class=\"auto-paginate\">\r\n    <ul\r\n      class=\"text-x-small\">\r\n      <li>American</li>\r\n      <li>Burgers</li>\r\n      <li>Chinese</li>\r\n      <li>Dessert</li>\r\n    </ul>\r\n  </article>\r\n</content>","title":"HTML Pagination","bundleId":null,"menuItems":[{"id":"0003","action":"DELETE"},{"id":"0002","action":"TOGGLE_PINNED"},{"id":"1001","action":"CUSTOM"},{"id":"1002","action":"CUSTOM"},{"id":"1003","action":"CUSTOM"}]},{"id":"00000000-0000-0000-0000-000000000014","deliveryTime":null,"text":"\n        Sample Text Card\n      ","kind":"mirror#timelineItem","title":"Text Message","bundleId":null,"menuItems":[{"id":"0002","action":"TOGGLE_PINNED"}]},{"id":"00000000-0000-0000-0000-000000000015","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article\r\n    class=\"photo\">\r\n    <img\r\n      src=\"https://farm8.staticflickr.com/7295/12214267533_280e1504eb.jpg\"\r\n      width=\"100%\"\r\n      height=\"100%\" />\r\n    <div\r\n      class=\"photo-overlay\"></div>\r\n    <section>\r\n      <p\r\n        class=\"text-auto-size\">Conservatory Garden</p>\r\n    </section>\r\n  </article>\r\n</content>","title":"Photo Overlay","bundleId":null,"menuItems":[{"id":"0003","action":"DELETE"},{"id":"0002","action":"TOGGLE_PINNED"},{"id":"1001","action":"CUSTOM"},{"id":"1002","action":"CUSTOM"}]},{"id":"00000000-0000-0000-0000-000000000016","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article\r\n    class=\"photo\">\r\n    <img\r\n      src=\"https://farm8.staticflickr.com/7422/13321884713_4ae25db459.jpg\"\r\n      width=\"100%\"\r\n      height=\"100%\" />\r\n    <div\r\n      class=\"photo-overlay\"></div>\r\n    <section>\r\n      <p\r\n        class=\"text-auto-size\">Wave Hill</p>\r\n    </section>\r\n  </article>\r\n</content>","title":"Photo Overlay","bundleId":null,"menuItems":[{"id":"0003","action":"DELETE"},{"id":"0002","action":"TOGGLE_PINNED"},{"id":"1001","action":"CUSTOM"},{"id":"1002","action":"CUSTOM"}]},{"id":"00000000-0000-0000-0000-000000000017","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article\r\n    class=\"photo\">\r\n    <img\r\n      src=\"https://farm8.staticflickr.com/7412/13039790694_7c09bc41fb.jpg\"\r\n      width=\"100%\"\r\n      height=\"100%\" />\r\n    <div\r\n      class=\"photo-overlay\"></div>\r\n    <section>\r\n      <p\r\n        class=\"text-auto-size\">New York Botanical Garden</p>\r\n    </section>\r\n  </article>\r\n</content>","title":"Photo Overlay","bundleId":null,"menuItems":[{"id":"0003","action":"DELETE"},{"id":"0002","action":"TOGGLE_PINNED"},{"id":"1001","action":"CUSTOM"},{"id":"1002","action":"CUSTOM"}]},{"id":"00000000-0000-0000-0000-000000000018","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article>\r\n    <figure>\r\n      <img\r\n        src=\"http://farm7.static.flickr.com/6018/5924160915_c4ebecda3d_m.jpg\"\r\n        width=\"240\"\r\n        height=\"360\" />\r\n    </figure>\r\n    <section>\r\n      <h2>Bartel-Pritchard Circle Columns</h2>\r\n      <h4\r\n        class=\"green\">Prospect Park</h4>\r\n      <strong>240x360</strong>\r\n    </section>\r\n  </article>\r\n</content>","title":"240x360","bundleId":null},{"id":"00000000-0000-0000-0000-000000000019","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article>\r\n    <figure>\r\n      <img\r\n        src=\"http://farm7.static.flickr.com/6143/5982872453_d710cdf10a_m.jpg\"\r\n        width=\"180\"\r\n        height=\"240\" />\r\n    </figure>\r\n    <section>\r\n      <h3>Albert Bertel Thorvaldsen</h3>\r\n      <h4\r\n        class=\"green\">Central Park</h4>\r\n      <strong>180w x 240h</strong>\r\n    </section>\r\n  </article>\r\n</content>","title":"2 Column Card","bundleId":null,"menuItems":[{"id":"0002","action":"TOGGLE_PINNED"},{"id":"1002","action":"CUSTOM"}]},{"id":"00000000-0000-0000-0000-000000000020","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article>\r\n    <figure>\r\n      <img\r\n        src=\"http://farm2.static.flickr.com/1067/5109155598_8040a7e639_m.jpg\"\r\n        width=\"240\"\r\n        height=\"180\" />\r\n    </figure>\r\n    <section>\r\n      <h2>Admiral David Glasgow Farragut</h2>\r\n      <h4>Madison Square Park</h4>\r\n    </section>\r\n  </article>\r\n</content>","title":"Photo Overlay","bundleId":null,"menuItems":[{"id":"0003","action":"DELETE"},{"id":"0002","action":"TOGGLE_PINNED"}]},{"id":"00000000-0000-0000-0000-000000000021","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <content>\r\n    <article\r\n      class=\"photo\">\r\n      <img\r\n        src=\"https://farm5.staticflickr.com/4125/4946482907_e120493cd8.jpg\"\r\n        width=\"100%\"\r\n        height=\"100%\" />\r\n      <div\r\n        class=\"photo-overlay\"></div>\r\n      <section>\r\n        <p\r\n          class=\"text-auto-size\">Central Park Bridges</p>\r\n      </section>\r\n    </article>\r\n  </content>\r\n</content>","title":"Central Park Bridges","isBundleCover":true,"bundleId":"nyccentralpark:archbridge","menuItems":[{"id":"0003","action":"DELETE"},{"id":"0002","action":"TOGGLE_PINNED"}]},{"id":"00000000-0000-0000-0000-000000000022","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article\r\n    class=\"author\">\r\n    <img\r\n      src=\"https://mirror-api-playground.appspot.com/links/filoli-spring-fling.jpg\"\r\n      width=\"100%\"\r\n      height=\"100%\" />\r\n    <div\r\n      class=\"overlay-full\" />\r\n    <header>\r\n      <img\r\n        src=\"https://mirror-api-playground.appspot.com/links/lincoln-avatar.png\" />\r\n      <h1>@abraham_lincoln</h1>\r\n      <h2>Gettysburg, Pennsylvania</h2>\r\n    </header>\r\n    <section>\r\n      <p\r\n        class=\"text-auto-size\">\r\n                Four score and seven years ago, our fathers brought forth on this continent a new nation, conceived in <span\r\n          class=\"blue\">#liberty</span></p>\r\n    </section>\r\n  </article>\r\n</content>","title":"Lincoln","bundleId":null,"menuItems":[{"id":"0003","action":"DELETE"},{"id":"0002","action":"TOGGLE_PINNED"}]},{"id":"00000000-0000-0000-0000-000000000023","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article\r\n    class=\"cover-only\">\r\n    <section>\r\n      <p\r\n        class=\"text-auto-size\">This is the cover card of a long list</p>\r\n    </section>\r\n    <footer>\r\n      <p>Hover to scroll</p>\r\n    </footer>\r\n  </article>\r\n  <article\r\n    class=\"auto-paginate\">\r\n    <ul\r\n      class=\"text-x-small\">\r\n      <li>First item</li>\r\n      <li>Second item</li>\r\n      <li>Third item</li>\r\n      <li>Fourth item</li>\r\n      <li>Fifth item</li>\r\n      <li>Sixth item</li>\r\n      <li>Seventh item</li>\r\n      <li>Eighth item</li>\r\n      <li>Ninth item</li>\r\n      <li>Tenth item</li>\r\n    </ul>\r\n  </article>\r\n</content>","title":"Central Park Bridges","bundleId":null,"menuItems":[{"id":"0003","action":"DELETE"},{"id":"0002","action":"TOGGLE_PINNED"}]},{"id":"00000000-0000-0000-0000-000000000024","deliveryTime":null,"kind":"mirror#timelineItem","html":"<content>\r\n  <article>\r\n    <figure>\r\n      <img\r\n        src=\"https://farm5.staticflickr.com/4107/5130718772_66e80c2dfe.jpg\"\r\n        width=\"240\"\r\n        height=\"180\" />\r\n    </figure>\r\n    <section>\r\n      <h2>Gapstow</h2>\r\n      <h4>Central Park</h4>\r\n    </section>\r\n    <footer>\r\n      <p>Explore</p>\r\n    </footer>\r\n  </article>\r\n</content>","title":"Gapstow Bridge","bundleId":"nyccentralpark:archbridge","menuItems":[{"id":"0003","action":"DELETE"},{"id":"0002","action":"TOGGLE_PINNED"}]}];
        var locationResponse = [{"id":"l6","accuracy":10.0,"address":null,"latitude":40.77505,"longitude":-73.96653,"timestamp":"2014-10-27T23:00:39.4760929+00:00"},{"id":"l5","accuracy":10.0,"address":null,"latitude":40.767372,"longitude":-73.971667,"timestamp":"2014-10-27T23:07:39.4760929+00:00"},{"id":"l11","accuracy":10.0,"address":null,"latitude":40.7132,"longitude":-74.01152,"timestamp":"2014-10-27T22:00:39.4760929+00:00"},{"id":"l5","accuracy":23.0,"address":null,"latitude":40.765169,"longitude":-73.97255,"timestamp":"2014-10-27T23:20:39.4760929+00:00"},{"id":"l13","accuracy":10.0,"address":null,"latitude":40.726967,"longitude":-73.998397,"timestamp":"2014-10-27T21:50:39.4760929+00:00"},{"id":"l16","accuracy":10.0,"address":null,"latitude":40.861232,"longitude":-73.93225,"timestamp":"2014-10-27T21:10:39.4760929+00:00"},{"id":"l10","accuracy":10.0,"address":null,"latitude":40.758949,"longitude":-73.97718,"timestamp":"2014-10-27T22:10:39.4760929+00:00"},{"id":"l2","accuracy":22.0,"address":null,"latitude":40.774194,"longitude":-73.973956,"timestamp":"2014-10-27T23:50:39.4760929+00:00"},{"id":"l12","accuracy":10.0,"address":null,"latitude":40.807048,"longitude":-73.960587,"timestamp":"2014-10-27T22:00:39.4760929+00:00"},{"id":"latest","accuracy":12.0,"address":null,"latitude":40.774475,"longitude":-73.972606,"timestamp":"2014-10-28T00:00:39.4614445+00:00"},{"id":"l3","accuracy":32.0,"address":null,"latitude":40.773297,"longitude":-73.968423,"timestamp":"2014-10-27T23:40:39.4760929+00:00"},{"id":"l15","accuracy":10.0,"address":null,"latitude":40.705517,"longitude":-74.013496,"timestamp":"2014-10-27T21:20:39.4760929+00:00"},{"id":"l14","accuracy":10.0,"address":null,"latitude":40.724136,"longitude":-73.997971,"timestamp":"2014-10-27T21:30:39.4760929+00:00"},{"id":"l8","accuracy":10.0,"address":null,"latitude":40.703968,"longitude":-74.01783,"timestamp":"2014-10-27T22:40:39.4760929+00:00"},{"id":"l9","accuracy":10.0,"address":null,"latitude":40.795132,"longitude":-73.954268,"timestamp":"2014-10-27T22:30:39.4760929+00:00"},{"id":"l4","accuracy":42.0,"address":null,"latitude":40.767849,"longitude":-73.981498,"timestamp":"2014-10-27T23:31:39.4760929+00:00"},{"id":"l7","accuracy":10.0,"address":null,"latitude":40.7458,"longitude":-73.728249,"timestamp":"2014-10-27T22:50:39.4760929+00:00"}];

        $httpBackend.whenGET(new RegExp('.*func=getTimeline.*')).respond(200, timelineResponse);
        $httpBackend.whenGET(new RegExp('.*func=getTemplate.*')).respond(200, templateResponse);
        $httpBackend.whenGET(new RegExp('.*func=getLocation.*')).respond(200, locationResponse);

        // Pass through any unmocked calls
        $httpBackend.whenGET().passThrough();
        $httpBackend.whenPOST().passThrough();
        $httpBackend.whenPUT().passThrough();
        $httpBackend.whenDELETE().passThrough();
    });