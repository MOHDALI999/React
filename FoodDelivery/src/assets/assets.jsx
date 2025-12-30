import { Mail, MapPin, Phone, CakeSlice, Coffee, GlassWater, Soup, Clock, BadgePercent, ShoppingCart } from "lucide-react";
import {
  faFacebookF,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const contactdetails = [
  {
    icon: <Phone size={22} />,
    detail: <a href="tel:8104361006">8104361006</a>,
  },
  {
    icon: <Mail size={22} />,
    detail: <a href="mailto:mohammedali@gmail.com">mohammedali@gmail.com</a>,
  },
  {
    icon: <MapPin size={22} />,
    detail: <address className="not-italic">Dawood aliji chawl room no 8</address>,
  },
];

export const menus = [
  {
    icon: <Coffee size={60} color="#474747" />,
    name: "Breakfast",
    para: "A warm and refreshing breakfast gives energy, balance, and confidence to begin your day with clarity.",
  },
  {
    icon: <Soup size={60} color="#474747" />,
    name: "Main Dishes",
    para: "Our main dishes combine fresh ingredients, rich flavors, and skilled cooking to create meals worth enjoying fully.",
  },
  {
    icon: <GlassWater size={60} color="#474747" />,
    name: "Drinks",
    para: "Every drink is crafted to refresh your senses, enhance your meal, and brighten moments with natural flavors.",
  },
  {
    icon: <CakeSlice size={60} color="#474747" />,
    name: "Desserts",
    para: "Our desserts offer sweet satisfaction through careful preparation, balanced taste, and a delightful finishing touch always.",
  },
];

export const offers = [
  {
    offerImage: "./foodimg.jpg",
    title: "Caterings",
    details: "In the new era of technology we look in the future with certainty for life.",
  },
  {
    offerImage: "./Panner.jpg",
    title: "Birthdays",
    details: "In the new era of technology we look in the future with certainty for life.",
  },
  {
    offerImage: "./Panner.jpg",
    title: "Weddings",
    details: "In the new era of technology we look in the future with certainty for life.",
  },
  {
    offerImage: "./foodimg.jpg",
    title: "Events",
    details: "In the new era of technology we look in the future with certainty for life.",
  },
]

export const socialicons = [
  {
    icon: (
      <FontAwesomeIcon
        icon={faTwitter}
        style={{ color: "#ffffff" }}
        size="13"
      />
    ),
    link: "https://x.com/",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faFacebookF}
        style={{ color: "#ffffff" }}
        size="13"
      />
    ),
    link: "https://www.facebook.com/",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faInstagram}
        style={{ color: "#ffffff" }}
        size="lg"
      />
    ),
    link: "https://www.instagram.com/",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faGithub}
        style={{ color: "#ffffff" }}
        size="lg"
      />
    ),
    link: "https://github.com/",
  },
];

export const citys = [
  {
    name: "Bangalore",
  },
  {
    name: "Mumbai",
  },
  {
    name: "Delhi",
  },
  {
    name: "Pune",
  },
  {
    name: "Hyderabad",
  },
  {
    name: "Chennai",
  },
];

export const images = [
  {
    foodimage: "./Panner.jpg",
  },
  {
    foodimage: "./Panner.jpg",
  },
  {
    foodimage: "./Panner.jpg",
  },
  {
    foodimage: "./Panner.jpg",
  },
];

export const fastfood = [
  {
    icon: <Clock color="white" size={16} />,
    detail: "Delivery within 30 minutes",
  },
  {
    icon: <BadgePercent color="white" size={16} />,
    detail: "Best Offer & Prices",
  },
  {
    icon: <ShoppingCart color="white" size={16} />,
    detail: "Online Services Available",
  },
];

export const testimonial = [
  {
    title: "“The best restaurant”",
    details: `Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.`,
    profileimg: "/foodimg.jpg",
    name: "Sophire Robson",
    place: "Los Angeles, CA",
  },
  {
    title: "“Simply delicious”",
    details: `Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.`,
    profileimg: "/foodimg.jpg",
    name: "Matt Cannon",
    place: "San Diego, CA",
  },
  {
    title: "“One of a kind restaurant”",
    details: `The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.`,
    profileimg: "/foodimg.jpg",
    name: "Andy Smith",
    place: "San Francisco, CA",
  },
  {
    title: "“One of a kind restaurant”",
    details: `The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.`,
    profileimg: "/foodimg.jpg",
    name: "Andy Smith",
    place: "San Francisco, CA",
  },
]

export const blog = [
  {
    date: "January 3, 2023",
    title: "How to prepare the perfect french fries in an air fryer",
  },
  {
    date: "January 3, 2023",
    title: "How to prepare the perfect french fries in an air fryer",
  },
  {
    date: "January 3, 2023",
    title: "How to prepare the perfect french fries in an air fryer",
  },
  {
    date: "January 3, 2023",
    title: "How to prepare the perfect french fries in an air fryer",
  },
]