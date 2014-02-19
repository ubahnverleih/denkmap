/**
 * Configuration for denkmap application
 */
Ext.define('Denkmap.util.Config', {
    singleton: true,

    config: {
        /**
         * @cfg {String} version Current version number of application
         **/
        version: '0.2.{BUILD_NR}',

        leafletMap: {
            zoom: 15,
            getTileLayerUrl: function(isRetina) {
                if(isRetina) {
                    return 'http://{s}.tile.cloudmade.com/{apikey}/{styleId}@2x/256/{z}/{x}/{y}.png';
                } else {
                    return 'http://{s}.tile.cloudmade.com/{apikey}/{styleId}/256/{z}/{x}/{y}.png';
                }
            },
            tileLayerAttribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> and  &copy; <a href="http://www.geolion.zh.ch/geodatenservice/show?nbid=691">Geodaten GIS-ZH</a>',
            apiKey: '14f1a83f16604a708a4876a956f9dd35',
            styleId: 997
        },

        webservices: {
            monument: {
                getUrl: function(latitude, longitude) {
                    return './nearby/' + latitude + ',' + longitude;
                },
                radius: 1000,
                limit: 25
            }
        },

        /**
         * @cfg {Object} zIndex zIndex for components
         * @cfg {Number} [zIndex.overlayLeafletMap=1500] (required) zIndex for panel to overlay leaflet map components
         */
        zIndex: {
            overlayLeafletMap: 1500
        }
    },

    /**
     * @private
     * initializes the configuration
     */
    constructor: function(config) {
        this.initConfig(config);
        return this;
    }
});
