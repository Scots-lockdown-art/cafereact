import React from "react";

const Gmap = () => {
  return (
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.6700148352293!2d-3.1282139000000004!3d55.955091100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b84e9def6edd%3A0x479e6a8c4e44bc54!2s24%20W%20Telferton%2C%20Edinburgh%20EH7%206UL!5e0!3m2!1sen!2suk!4v1713131216443!5m2!1sen!2suk"
      width="300"
      height="200"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Gmap;
