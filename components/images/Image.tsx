export const images = {
  profile: require("@/assets/images/profile.png"),
  phone: require("@/assets/images/phone.png"),
  email: require("@/assets/images/mail.png"),
  password: require("@/assets/images/password.png"),
  localisation: require("@/assets/images/localisation.png"),
  add: require("@/assets/images/add.png"),
  user: require("@/assets/images/user.png"),
  welcome: require("@/assets/images/welcome.png"),
  search: require("@/assets/images/search.jpg"),
  service1: require("@/assets/images/service1.jpg"),
  service2: require("@/assets/images/service2.jpg"),
  service3: require("@/assets/images/service3.jpg"),
};

export const GetImage = (name: keyof typeof images) => {
  return images[name];
};
