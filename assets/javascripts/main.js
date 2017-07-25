(function ( $ ) {

    window.BP_Frontend = function() {};
    window.BP_Frontend.prototype = {

        /**
         * Cookie time format
         * @param exp_days
         * @returns {string}
         */
        cookieTimeInDays: function(exp_days)
        {
            var dt = new Date();
            dt.setTime(dt.getTime() + (exp_days * 86400000)); // Convert days to ms
            return dt.toUTCString();
        },

        /**
         * Credit: https://stackoverflow.com/a/25971410
         * @returns {*}
         */
        getLocation: function()
        {
            var deferred = $.Deferred();
            if(navigator.geolocation) {
                // geo location is supported. Call navigator.geolocation.getCurrentPosition and :
                // - resolve the promise with the returned Position object, or
                // - reject the promise with the returned PositionError object, or
                // - time out after 5 seconds
                navigator.geolocation.getCurrentPosition(deferred.resolve, deferred.reject, { timeout: 5000 });
            } else {
                //geo location isn't supported
                //Reject the promise with a suitable error message
                deferred.reject(new Error('Your browser does not support Geo Location.'));
            }
            return deferred.promise();
        },


        /**
         * vanilla javascript $.getScript alternative
         * @param url
         */
        getScript: function(url) {

            var s        = document.createElement("script");
            s.type       = "text/javascript";
            s.language   = "javascript";
            s.url        = url;

            document.body.appendChild(s);
        }

    };

}( jQuery ));