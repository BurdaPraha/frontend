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
        },


        /**
         * Tabs <element onclick="switchContent(this, 'tab-xy');">
         * @param e this - context
         * @param elementId - target element id
         */
        switchContent: function (e, elementId)
        {
            var another_links = e.parentNode.children;
            for(var l = 0; l < another_links.length; l++)
            {
                another_links[l].classList.remove('active');
            }
            e.classList.add('active');

            // content
            var target_content  = document.getElementById(elementId);
            var another_content = target_content.parentNode.children;

            for(var c = 0; c < another_content.length; c++)
            {
                another_content[c].classList.remove('active');
                another_content[c].classList.add('hidden');
            }

            // set active tab
            target_content.classList.remove('hidden');
            target_content.classList.add('active');
        },


        /**
         * @param element
         * @returns {*}
         */
        getLabelText: function (element)
        {
            return element.getElementsByTagName("label")[0].innerHTML;
        },


        /**
         *
         * @param p
         * @returns {boolean}
         */
        isValidSlovakPhone: function (p) {
            var phoneRe = /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/;
            var digits = p.replace(/\D/g, "");
            return phoneRe.test(digits);
        },


        /**
         * alternative searching element in same parent without jQuery
         * @param el
         * @param selector
         * @returns {*}
         */
        closest: function (el, selector)
        {
            var matchesFn;

            // find vendor prefix
            ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
                if (typeof document.body[fn] == 'function') {
                    matchesFn = fn;
                    return true;
                }
                return false;
            });

            var parent;

            // traverse parents
            while (el) {
                parent = el.parentElement;
                if (parent && parent[matchesFn](selector)) {
                    return parent;
                }
                el = parent;
            }


            return null;
        }


    };

}( jQuery ));