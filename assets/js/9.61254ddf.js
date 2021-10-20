(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{390:function(e,t,a){"use strict";a.r(t);var r=a(10),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("h3",{attrs:{id:"currently-provided-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#currently-provided-apis"}},[e._v("#")]),e._v(" Currently provided APIs")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Ship From List")]),e._v(" "),a("br"),e._v("\nGetting available sender addresses")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Rate")]),e._v(" "),a("br"),e._v("\nYou can estimate a rate by providing a subset of the information required to create a label. You can use this to allow customers to quickly compare rates across services, carriers, and more without having to fill in all the information required to create a label.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Address validation")]),e._v(" "),a("br"),e._v("\nProvide you with an official address")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Shipping")]),e._v(" "),a("br"),e._v("\nCreate and customize shipping labels")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Download Label")]),e._v(" "),a("br"),e._v("\nObtain Label information and convert the waybill created by Shipping into PDF format for printing")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Cancel")]),e._v(" "),a("br"),e._v("\nCancel created label before Shipping")])])]),e._v(" "),a("h2",{attrs:{id:"sandbox-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sandbox-environment"}},[e._v("#")]),e._v(" Sandbox Environment")]),e._v(" "),a("h3",{attrs:{id:"how-to-use-the-sandbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-the-sandbox"}},[e._v("#")]),e._v(" How to Use the Sandbox")]),e._v(" "),a("p",[e._v("We will provide you with API-key and API-secret dedicated to the sandbox environment for testing, which is also convenient for you to test without incurring real costs and real tracking information\nOther than the API-key and API-secret, everything else is the same. So you can easily test and develop your application in the sandbox and then when you're ready to go to production all you need to do is change the API key.")]),e._v(" "),a("h3",{attrs:{id:"differences-in-behavior"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#differences-in-behavior"}},[e._v("#")]),e._v(" Differences in Behavior")]),e._v(" "),a("p",[e._v("Our sandbox environment matches the production environment as much as possible, but there are a few differences to be aware of:")]),e._v(" "),a("h4",{attrs:{id:"limited-parcel-carriers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limited-parcel-carriers"}},[e._v("#")]),e._v(" Limited Parcel Carriers")]),e._v(" "),a("p",[e._v("We currently only support the three major US parcel carriers -- UPS, FedEx, Pitney Bowes and USPS (Stamps.com). Other carriers will be added in the future, including international carriers.However, in the sandbox environment, the account only provides three services: FedEx Ground, FedEx Home Delivery and UPS Ground for testing.Rates")]),e._v(" "),a("h4",{attrs:{id:"rates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rates"}},[e._v("#")]),e._v(" Rates")]),e._v(" "),a("p",[e._v('The shipping rates that you get in the sandbox may not match the rates that you get in production. Any negotiated rate discounts that you have are not applied in the sandbox, and some rates are "dummy" rates to prevent abuse of our sandbox for production purposes.')]),e._v(" "),a("h4",{attrs:{id:"test-labels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-labels"}},[e._v("#")]),e._v(" Test Labels")]),e._v(" "),a("p",[e._v("Created in the sandbox environment with multiple Labels per shipment or one Label per shipment, because in fact printing the label will incur costs,  we set up a test label for download,so the printed labels are all the same label")]),e._v(" "),a("h3",{attrs:{id:"test-environment-https-api-sandbox-shipber-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-environment-https-api-sandbox-shipber-app"}},[e._v("#")]),e._v(" Test Environment: \b\b"),a("code",[e._v("https://api.sandbox.shipber.app")])]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"account-password-used-for-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-password-used-for-testing"}},[e._v("#")]),e._v(" Account password used for testing")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("api-key： 2cn1wgmfidytin3jef3b \napi-secret： qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C\n")])])]),a("br"),e._v(" "),a("h3",{attrs:{id:"formal-environment-https-api-shipber-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formal-environment-https-api-shipber-app"}},[e._v("#")]),e._v(" Formal environment: "),a("code",[e._v("https://api.shipber.app")])]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"suggested-test-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suggested-test-steps"}},[e._v("#")]),e._v(" Suggested test steps")]),e._v(" "),a("ol",[a("li",[e._v("First use the test account to obtain the sending address according to the ship from interface (uuid and ship from will be returned)")]),e._v(" "),a("li",[e._v("The next step is the validate interface to verify whether the sendable address is available")]),e._v(" "),a("li",[e._v("The third step is the rate interface pricing (note: the uuid and detailed address of the ship from field are two options, it is recommended to use uuid because the error rate of only one field will be very low)")]),e._v(" "),a("li",[e._v("Then there is the single creation interface of post/label (note that carrier service and rate id are fields returned according to the rate interface, and must be transmitted accordingly)")]),e._v(" "),a("li",[e._v("The fifth step is to get/label to query the order interface")]),e._v(" "),a("li",[e._v("The last is the cancel interface")])]),e._v(" "),a("br"),e._v(" "),a("p",[a("strong",[e._v("Be sure to perform a very complete test in the test environment before going to the formal environment for ordering operations.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);