import logo from "@/images/resources/nyungweculture.jpg";

const social = [
  { icon: "fa-facebook-square", link: "https://www.facebook.com/profile.php?id=61552967395485" },
  { icon: "fa-twitter", link: "https://twitter.com/adventure_64364" },
  { icon: "fa-instagram", link: "https://www.instagram.com/adventureforyou9/" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "Nyungwe Culture village",
  about:
    "Welcome to our Trip and Tour Agency",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+250788685393/0786611882",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "nyungweculturalvillage@gmail.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "Western Province \n RWANDA",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" },
    // { id: 2, link: "#", title: "Community Blog" },
    // { id: 3, link: "#", title: "Rewards" },
    // { id: 4, link: "#", title: "Work with Us" },
    // { id: 5, link: "#", title: "Meet the Team" },
  ],
  // explore: [
  //   { id: 1, link: "#", title: "Account" },
  //   { id: 2, link: "#", title: "Legal" },
  //   { id: 3, link: "#", title: "Contact" },
  //   { id: 4, link: "#", title: "Affilitate Program" },
  //   { id: 5, link: "#", title: "Privacy Policy" },
  // ],
};

export default footerData;
