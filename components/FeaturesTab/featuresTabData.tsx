import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "GIS Data",
    desc1: `Geographic Information Systems data will be sourced from government databases and organizations such as the US Geological Survey (USGS) and Esri.`,
    desc2: `     GIS platforms provide detailed spatial data on land use, infrastructure, and demographics. `,
    image: "/images/2.png",
    imageDark: "/images/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "Satellite Imagery",
    desc1: `Satellite data will be obtained from NASA’s Earth Observing System Data and Information System (EOSDIS) and the MOderate Resolution Imaging Spectroradiometer (MODIS) aboard the Terra and Aqua satellites.`,
    desc2: `     These sources offer high-resolution thermal imagery essential for monitoring land surface temperatures. `,
    image: "/images/3.JPG",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: "Mobile Data",
    desc1: `Data from mobile weather applications and networks of IoT sensors will be used. `,
    desc2: `Companies like Weather Underground and community-based networks like PurpleAir provide real-time weather and air quality data from many sensors distributed across the city/urban areas. `,
    image: "/images/4.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
];

export default featuresTabData;
