import agnesImg from "../assets/agnes.jpg";
import ashleyImg from "../assets/ashley.jpg";
import assumptaImg from "../assets/assumpta.jpg";
import heduikImg from "../assets/heduik.jpg";
import joelImg from "../assets/joel.jpg";
import judithImg from "../assets/judith.jpg";
import katieImg from "../assets/katie.jpg";
import lindaImg from "../assets/linda.png";
import defaultAvatar from "../assets/member.svg";
import moxieImg from "../assets/moxie.jpg";
import samsonImg from "../assets/samson.jpg";

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
 *
 * Optional per-member photo framing:
 * - `imagePosition`: CSS `object-position` for the cropped photo (default "center center")
 * - `imageStyle`: extra inline styles, e.g. `{ objectFit: "contain" }` to show
 *   a portrait photo in full inside the landscape card frame
 */
export const teamMembers = [
  {
    id: 1,
    name: "Samson Alayande",
    role: "Director of Operations",
    degree: "MA (ABA)",
    credentials: "Behavior Specialist | Level 1 Provider",
    image: samsonImg,
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
    image: heduikImg,
  },
  {
    id: 4,
    name: "Assumpta Sirri",
    role: null,
    degree: "PMHNP-BC",
    credentials: "Qualified Supervising Professional | Level 1 Provider",
    image: assumptaImg,
    imagePosition: "center top",
  },
  {
    id: 5,
    name: "Agnes Ale",
    role: null,
    degree: "BCBA | Licensed Behavior Analyst",
    credentials: "Qualified Supervising Professional | Level 1 Provider",
    image: agnesImg,
    imagePosition: "center 30%",
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
    name: "Judith Motome Esembe",
    role: null,
    degree: "MEd (Special Education)",
    credentials: "Behavior Specialist | Program Coordinator | Level 1 Provider",
    image: judithImg,
    imagePosition: "center center",
  },
  {
    id: 8,
    name: "Katie Hodges",
    role: null,
    degree: "BSc (Psychology)",
    credentials: "Level 1 Provider",
    image: katieImg,
    // Portrait photo in a landscape card frame. Scaled past the width-fill
    // point (1.72) so it bleeds edge to edge, anchored to the top so the
    // crop comes off the bottom and her face stays intact. The translate is
    // listed first so it stays an unscaled 0.85rem shift; lift her further up
    // screen (drop the sign to move her down).
    imageStyle: {
      objectFit: "contain",
      transform: "translateY(-3.5rem) scale(1.74)",
      transformOrigin: "center top",
    },
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
    image: moxieImg,
    imagePosition: "center 45%",
  },
];

export { defaultAvatar };
