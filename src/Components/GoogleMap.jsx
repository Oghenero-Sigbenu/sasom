import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            // eslint-disable-next-line
            // width="698"
            className="w-full"
            width="100%"
            title="Map"
            height="450"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.5318873787965!2d-79.55740992415066!3d43.63710107110285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b378b56468761%3A0x48d5651fedf30d3b!2s4019%20Bloor%20St%20W%2C%20Etobicoke%2C%20ON%20M9B%201M4%2C%20Canada!5e0!3m2!1sen!2sng!4v1697530689672!5m2!1sen!2sng"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default GoogleMap;
