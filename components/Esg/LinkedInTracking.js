import React from "react"
import Script from "next/script"

export default function LinkedInTracking() {
    return (
        <>
            <Script id="linkedin-partner-id" type="text/javascript">
                {`
          _linkedin_partner_id = "7007252";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
            </Script>

            <Script id="linkedin-insight" type="text/javascript">
                {`
          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
            </Script>
            <noscript>
                <img height="1" width="1" style={{ display: "none" }} alt="" src="https://px.ads.linkedin.com/collect/?pid=7007252&fmt=gif" />
            </noscript>
        </>
    )
}
