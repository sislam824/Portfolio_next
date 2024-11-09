import { useEffect, useState } from "react";

const images = [
  "https://imgs.search.brave.com/0fu9wvgtNDiy652omtFTvhWOBsb85SYrtMIIDts3w6A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9nb2Etc2VhLWJl/YWNoLXBob3RvXzEx/NzA1MzAtMzMyOC5q/cGc_c2VtdD1haXNf/aHlicmlk",
  "https://imgs.search.brave.com/-eTvWnpcRXzOQJbP7o_6tKz8m0ruwSE95IkOblDN0fU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzg5Lzg0LzIx/LzM2MF9GXzQ4OTg0/MjE4OF9LUTVKc1o3/aFMyQlhvdTdIbjB2/UTlRb3lkN3VIbEdo/bi5qcGc",
  "https://imgs.search.brave.com/qV4EHXHgYWndmInXjsaI6dGHMoRgdvzpnzw6UxaS_yM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU0/OTYyOTE4L3Bob3Rv/L3N1bnJpc2UtY2Fu/ZG9saW0tYmVhY2gt/Z29hLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1fb1ItRkdh/OXp6bmFVQ0l0Tk83/UmdnRFRxaFNtSnla/RnVMdkRxUzZQLWpN/PQ",

  "https://imgs.search.brave.com/ZS--XRe9nR50eE5S36FTRGPEHVvIX45300cPlU2q3KQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NDI0MjI4L3Bob3Rv/L2V0aGVyaWFsLWlt/YWdlLW9mLXRoZS1o/ZWF2ZW5zLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz16ZW0z/b3F1ejFhUk1TYmc3/c0Y3MmljV3NvTFpW/SGdiMXR5R0tSZlBT/Nl9NPQ",
  "https://t3.ftcdn.net/jpg/10/44/96/70/240_F_1044967005_EAf3R5U2Aw5ApCut2tVKJfzQgugUTjBd.jpg",
  "https://as1.ftcdn.net/v2/jpg/08/21/45/34/1000_F_821453445_eDA8VclLeXJ5kmmjHyWquK4wwO4Bu9EZ.jpg",
  "https://as2.ftcdn.net/v2/jpg/08/35/91/51/1000_F_835915166_8o57WACJhDeAG12c68I4Hul3mslIjSRs.jpg",
  "https://as1.ftcdn.net/v2/jpg/09/39/01/10/1000_F_939011008_NRBUrYAH9FxqYufR0QtAamzkAwSJCMI5.jpg",
  // Add more image URLs here
];

export function useRandomBackgroundImage() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setBackgroundImage(images[randomIndex]);
  }, []);

  return { backgroundImage };
}
