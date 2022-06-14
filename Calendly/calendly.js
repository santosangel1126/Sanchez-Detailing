function isCalendlyEvent(e) {
    return e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0;
  };
   
  window.addEventListener("message", function(e) {
    if(isCalendlyEvent(e)) {
      /* Example to get the name of the event */
      console.log("Event name:", e.data.event);
      
      /* Example to get the payload of the event */
      console.log("Event details:", e.data.payload);
    }
  });

Calendly.initInlineWidget({
    url: 'https://calendly.com/iiisantosjangel?hide_landing_page_details=1?hide_landing_page_details=1',
    parentElement: document.getElementById('appointment'),
    prefill: {},
    utm: {}

    
   });

  