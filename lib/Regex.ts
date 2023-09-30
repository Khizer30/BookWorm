const regex =
{
  displayName: new RegExp("^[a-zA-Z\\s]+$"),
  phoneNumber: new RegExp("[0-9]{11}"),
  address: new RegExp("^[\\w\\s,-]+$"),
  city: new RegExp("^[a-zA-Z\\s]+$")
};

export default regex;