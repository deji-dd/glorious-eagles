import agnesImg from "../assets/agnes.jpg";
import ashleyImg from "../assets/ashley.jpg";
import joelImg from "../assets/joel.jpg";
import judithImg from "../assets/judith.jpg";
import lindaImg from "../assets/linda.png";
import defaultAvatar from "../assets/member.svg";

/**
 * Team Members Data
 *
 * To add a picture for any member:
 * 1. Place your image file in `src/assets/` (e.g. `samson.jpg`)
 * 2. Import it at the top of this file:
 *    import samsonPic from "../assets/samson.jpg";
 * 3. Assign it to the `image` property:
 *    image: samsonPic, (or use an absolute/relative image URL string)
 *
 * When `image` is null or not provided, the default silhouette avatar is displayed.
 */
export const teamMembers = [
  {
    id: 1,
    name: "Samson Alayande",
    role: "Director of Logistics",
    degree: "MA (ABA)",
    credentials: "Behavior Specialist | Level 1 Provider",
    image: null, // Space for picture
  },
  {
    id: 2,
    name: "Joel Sanderson",
    role: "Director ABA Service",
    degree: "BCBA | Licensed Behavior Analyst",
    credentials: "Qualified Supervising Professional | Level 1 Provider",
    image: joelImg,
  },
  {
    id: 3,
    name: "Heduik Cho Mofor",
    role: "Director Mental Health",
    degree: "PMHNP-BC",
    credentials: "Qualified Supervising Professional | Level 1 Provider",
    image: null, // Space for picture: add once image is placed in src/assets
  },
  {
    id: 4,
    name: "Assumpta Sirri",
    role: null,
    degree: "PMHNP-BC",
    credentials: "Qualified Supervising Professional | Level 1 Provider",
    image: null, // Space for picture: add once image is placed in src/assets
  },
  {
    id: 5,
    name: "Agnes Ale",
    role: null,
    degree: "BCBA | Licensed Behavior Analyst",
    credentials: "Qualified Supervising Professional | Level 1 Provider",
    image: agnesImg,
  },
  {
    id: 6,
    name: "Linda Agbor",
    role: null,
    degree: "MA (Concentration in ABA)",
    credentials: "Behavior Specialist | Program Coordinator | Level 1 Provider",
    image: lindaImg,
    imagePosition: "center 20%",
  },
  {
    id: 7,
    name: "Judith Etombe Esembe",
    role: null,
    degree: "MEd (Special Education)",
    credentials: "Behavior Specialist | Program Coordinator | Level 1 Provider",
    image: judithImg,
    imagePosition: "center center",
  },
  {
    id: 8,
    name: "Kaytie Hodges",
    role: null,
    degree: "MA (Clinical Mental Health Counseling)",
    credentials: "Level 1 Provider",
    image: null, // Space for picture: add once image is placed in src/assets
  },
  {
    id: 9,
    name: "Ashley Smith",
    role: null,
    degree: null,
    credentials: "RBT | Level II Provider",
    image: ashleyImg,
  },
  {
    id: 10,
    name: "Moxie Stroud",
    role: null,
    degree: null,
    credentials: "RBT | Level II Provider",
    image: null, // Space for picture: add once image is placed in src/assets
  },
];

export { defaultAvatar };
